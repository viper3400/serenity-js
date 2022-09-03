/* eslint-disable unicorn/consistent-function-scoping */
import 'mocha';

import { expect } from '@integration/testing-tools';
import { contain, Ensure, equals, includes, isPresent, not } from '@serenity-js/assertions';
import { actorCalled, Log, LogicError } from '@serenity-js/core';
import { Attribute, By, CssClasses, Enter, Navigate, PageElement, PageElements, Text, Value } from '@serenity-js/web';

import { ExportedPageElements } from './fixtures/ExportedPageElements';

/** @test {PageElements} */
describe('PageElements', () => {

    beforeEach(() =>
        actorCalled('Peggy').attemptsTo(
            Navigate.to('/screenplay/models/page-elements/locator_patterns.html')
        ));

    describe('when using advanced locator strategies', () => {

        describe('to find a specific element', () => {

            describe('using a direct locator pattern', () => {

                const element = () =>
                    PageElement.located(By.css('.element'));

                it(`finds the element, if one exists`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(Text.of(element()), equals('expected')),
                    ));
            });

            describe('using a child-parent locator pattern', () => {

                const childParentStrategySection = () =>
                    PageElement.located(By.css('[data-test-id="child-parent-locator-pattern"]'))
                        .describedAs('child-parent locator strategy section');

                const child = () =>
                    PageElement.located(By.css('.child'));

                const parent1 = () =>
                    PageElement.located(By.css('[data-test-id="parent-1"]'))
                        .of(childParentStrategySection())
                        .describedAs('parent 1');

                const parent2 = () =>
                    PageElement.located(By.css('[data-test-id="parent-2"]'))
                        .of(childParentStrategySection())
                        .describedAs('parent 2');

                it(`finds a direct descendant, if one exists`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(
                            Text.of(parent1()),
                            includes('child 1.1')
                        ),
                    ));

                it(`finds an indirect descendant, if one exists`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(
                            Text.of(child().of(parent2())),
                            equals('child 2.1')
                        ),
                    ));

                // see https://github.com/serenity-js/serenity-js/issues/1106
                it(`supports exported PageElements`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(
                            Text.of(child().of(ExportedPageElements.parent())),
                            equals('child 1.1')
                        ),
                    ));
            });

            describe('using a filter locator pattern to find a non-unique parent element', () => {

                const filterStrategySection = () =>
                    PageElement.located(By.css('[data-test-id="filter-locator-pattern"]'))
                        .describedAs('filter pattern section');

                const parents = () =>
                    PageElements.located(By.css('.parent'))
                        .of(filterStrategySection())

                const children = () =>
                    PageElements.located(By.css('.child'));

                it(`finds the element, if one exists`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(
                            Attribute.called('data-test-id').of(
                                parents()
                                    .where(Text.ofAll(children()), contain('tea'))
                                    // AND
                                    .where(Text.ofAll(children()), contain('coffee'))
                                    .first()
                            ),
                            equals('parent-2')
                        ),
                    ));

                it(`allows to check if the element of interest is present`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(
                            parents()
                                .where(Text.ofAll(children()), contain('tea'))
                                // AND
                                .where(Text.ofAll(children()), contain('coffee'))
                                .first(),
                            isPresent(),
                        ),
                    ));

                it(`complains if the element is not present`, () =>
                    expect(
                        actorCalled('Peggy').answer(
                            parents()
                                .where(Text.ofAll(children()), contain('tea'))
                                .where(Text.ofAll(children()), contain('coffee'))
                                .where(Text.ofAll(children()), contain('juice'))
                                // there's no parent container with all the three items
                                .first()
                                .nativeElement()
                        )
                    ).to.be.rejectedWith(LogicError, `Can't retrieve the first item from a list with 0 items: [ ]`)
                );

                it(`allows to check if the element of interest is not present`, () =>
                    actorCalled('Peggy').attemptsTo(
                        Ensure.that(
                            parents()
                                .where(Text.ofAll(children()), contain('tea'))
                                .where(Text.ofAll(children()), contain('coffee'))
                                .where(Text.ofAll(children()), contain('juice'))
                                // there's no parent container with all the three items
                                .first(),
                            not(isPresent())
                        ),
                    ));
            });
        });

        describe('to find multiple elements', () => {

            const childParentStrategySection = () =>
                PageElement.located(By.css('[data-test-id="filter-locator-with-mapping-pattern"]'))
                    .describedAs('filter pattern with mapping section');

            const containers = () =>
                PageElements.located(By.css('.container'))
                    .describedAs('containers')
                    .of(childParentStrategySection());

            const heading = () =>
                PageElement.located(By.tagName('h1'))
                    .describedAs('heading');

            const listItems = () =>
                PageElements.located(By.css('ul li'))
                    .describedAs('list items');

            it('allows for the found elements to be mapped to child elements', () =>
                actorCalled('Peggy').attemptsTo(
                    Ensure.that(
                        Text.ofAll(
                            containers()
                                .where(Text.ofAll(listItems()), contain('coffee'))
                                .eachMappedTo(heading())
                        ),
                        equals(['First shopping list', 'Second shopping list'])
                    ),
                ));

            it('allows for a list of found PageElement[] to be mapped to lists of Text.ofAll(children) of those elements', () =>
                actorCalled('Peggy').attemptsTo(
                    Ensure.that(
                        containers().eachMappedTo(Text.ofAll(listItems())),
                        equals([
                            [ 'biscuits', 'coffee', 'milk' ],
                            [ 'coffee', 'cake' ],
                            [ 'apples', 'oranges' ],
                        ])
                    ),
                ));

            it('produces a sensible description', () => {
                const description = Text.of(
                    heading().of(
                        containers()
                            .where(Text.ofAll(listItems()), contain('coffee'))
                            .last()
                    )
                ).toString();

                expect(description).to.equal(
                    `the text of heading of the last of containers of filter pattern with mapping section where the text of list items does contain 'coffee'`
                );
            });
        });

        describe('to find a sibling by other sibling and parent', () => {
            const sectionUnderTest = () => PageElement.located(By.css('[data-test-id="locate-sibling-by-parent-pattern"]'))
                .describedAs('section under test');
            
            const allParents = () => PageElements.located(By.css('.parent'))
                .of(sectionUnderTest())
                .describedAs('all parent elements');

            const child = () => PageElement.located(By.css('div'))
                .of(sectionUnderTest())
                .describedAs('div element')

            const sibling_2_1 = () => PageElement.located(By.css('.sibling-2-1'))
            
            const parentOfSibling_2_1 = () => allParents().where(CssClasses.of(child()), contain('.sibling-2-1'))
            .first();
            
            const inputFieldOfSibling_2_1 = () => PageElement.located(By.css('input')).of(parentOfSibling_2_1());

            it('finds the element', () => actorCalled('Peggy').attemptsTo(
                Log.the(Text.of(sibling_2_1())),
                Log.the(Text.of(parentOfSibling_2_1()))
                /*Enter.theValue('are sweet').into(inputFieldOfSibling_2_1()),
                Ensure.that(Value.of(inputFieldOfSibling_2_1()), equals('are sweet'))*/
            ));
        });
    });    
});
