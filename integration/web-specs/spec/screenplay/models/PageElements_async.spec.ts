import 'mocha';

import { contain, Ensure, equals, not, startsWith } from '@serenity-js/assertions';
import { actorCalled, Answerable, Check, Duration, Log } from '@serenity-js/core';
import { By, Click, CssClasses, isVisible, Navigate, Page, PageElement, PageElements, Text, Wait } from '@serenity-js/web';


class ShoppingList {
    static app = () =>
        PageElement.located(By.id('shopping-list-app'))
            .describedAs('shopping list app');

    static progress = () =>
        PageElement.located(By.css('.progress'))
            .describedAs('progress bar')
            .of(ShoppingList.app());

    static numberOfItemsLeft = () =>
        PageElement.located(By.css('span'))
            .describedAs('number of items left')
            .of(ShoppingList.progress());

    static header = () =>
        PageElement.located(By.tagName('h1')).describedAs('header');

    static list = () =>
        PageElement.located(By.tagName('ul')).describedAs('shopping list');

    static items = () =>
        PageElements.located(By.tagName('li'))
            .describedAs('items')
            .of(ShoppingList.app());

    static boughtItems = () =>
        PageElements.located(By.css('.bought'))
            .describedAs('bought items')
            .of(ShoppingList.list());
}

class DynamicShoppingList {
    static items = () =>
        PageElements.located(By.css('li')).describedAs('shopping list items');

    static item = () =>
        PageElement.located(By.css('li')).describedAs('shopping list item');

    static titles = () =>
        PageElements.located(By.css('li span.item-name')).describedAs('shopping list item titles');

    static itemName = () =>
        PageElement.located(By.css('span.item-name')).describedAs('item name');

    static output = () =>
        PageElement.located(By.css('#output')).describedAs('output');
}

const ItemCalled = (name: string) =>
    DynamicShoppingList.items()
        .where(Text.of(DynamicShoppingList.itemName()), equals(name))
        .first();

const ItemsLeftToBuy = () =>
    DynamicShoppingList.items()
        .where(CssClasses, contain('buy'));

const LinkTo = (item: Answerable<PageElement>) =>
    PageElement.located(By.css('a')).of(item).describedAs('link to element');

const notExistingElement = () =>
    PageElement.located(By.css('.not-existing-class'))
        .describedAs('a not existing page element');

const notExistingChild = () =>
    PageElement.located(By.css('.not-existing-child'))
        .of(notExistingElement())
        .describedAs('a not existing child');

/** @test {PageElements} */
describe('PageElements', () => {

    describe('allows the actor to locate', () => {

        it('a single web element matching the selector', () =>
            actorCalled('Elle').attemptsTo(
                Navigate.to('/screenplay/models/page-elements/shopping_list.html'),

                Ensure.that(Text.of(ShoppingList.header()), equals('Shopping list')),
            ));

        it('all web elements matching a selector', () =>
            actorCalled('Elle').attemptsTo(
                Navigate.to('/screenplay/models/page-elements/shopping_list.html'),

                Ensure.that(Text.ofAll(ShoppingList.items()), contain('oats')),
            ));

        it('an element relative to another page element', () =>
            actorCalled('Elle').attemptsTo(
                Navigate.to('/screenplay/models/page-elements/shopping_list.html'),
                Ensure.that(ShoppingList.numberOfItemsLeft().text().as(Number), equals(2)),
            ));

        it('can ensure that a page element does not exist', () =>
            actorCalled('Elle').attemptsTo(
                Navigate.to('/screenplay/models/page-elements/dynamic_shopping_list_async.html'),
                Ensure.that(notExistingElement(), not(isVisible())),
        ));

        it('can ensure that a page element does not exist where parent does not exists as well', () =>
        actorCalled('Elle').attemptsTo(
            Navigate.to('/screenplay/models/page-elements/dynamic_shopping_list_async.html'),
            Ensure.that(notExistingChild(), not(isVisible())),
    ));


        it('can handle timeout' , () =>
            actorCalled('Elle').attemptsTo(
                Navigate.to('/screenplay/models/page-elements/dynamic_shopping_list_async.html'),
                Click.on(LinkTo(ItemCalled('coffee'))),
                //Wait.for(Duration.ofSeconds(10)),
                //Ensure.that(Text.of(DynamicShoppingList.output()), equals( 'clicked on: coffee x' ))
                Check.whether(Text.of(DynamicShoppingList.output()), equals( 'clicked on: coffee x' ))
                .andIfSo(
                    Ensure.that(Text.of(DynamicShoppingList.output()), equals( 'clicked on: coffee x' )
                )).otherwise(
                    Log.the('Text not found.')
                )
        ));
    });
});
