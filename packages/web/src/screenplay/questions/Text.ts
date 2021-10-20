import { Answerable, AnswersQuestions, MetaQuestion, Question, UsesAbilities } from '@serenity-js/core';

import { Element, ElementList } from '../../ui';
import { ElementQuestion } from './ElementQuestion';
import { TargetNestedElement, TargetNestedElements } from './targets';

/**
 * @desc
 *  Resolves to the visible (i.e. not hidden by CSS) `innerText` of:
 *  - a given {@link WebElement}, represented by Answerable<{@link @wdio/types~Element}>
 *  - a group of {@link WebElement}s, represented by Answerable<{@link @wdio/types~ElementList}>
 *
 *  The result includes the visible text of any sub-elements, without any leading or trailing whitespace.
 *
 * @example <caption>Example widget</caption>
 *  <h1>Shopping list</h1>
 *  <ul id="shopping-list">
 *    <li>Coffee<li>
 *    <li class="bought">Honey<li>
 *    <li>Chocolate<li>
 *  </ul>
 *
 * @example <caption>Retrieve text of a single element</caption>
 *  import { actorCalled } from '@serenity-js/core';
 *  import { Ensure, equals } from '@serenity-js/assertions';
 *  import { BrowseTheWeb, by, Target, Text } from '@serenity-js/webdriverio';
 *
 *  const header = () =>
 *      Target.the('header').located(by.tagName('h1'))
 *
 *  actorCalled('Lisa')
 *      .whoCan(BrowseTheWeb.using(browser))
 *      .attemptsTo(
 *          Ensure.that(Text.of(header()), equals('Shopping list')),
 *      )
 *
 * @example <caption>Retrieve text of a multiple elements</caption>
 *  import { actorCalled } from '@serenity-js/core';
 *  import { Ensure, equals } from '@serenity-js/assertions';
 *  import { BrowseTheWeb, by, Target, Text } from '@serenity-js/webdriverio';
 *
 *  const shoppingListItems = () =>
 *      Target.the('shopping list items').located(by.css('#shopping-list li'))
 *
 *  actorCalled('Lisa')
 *      .whoCan(BrowseTheWeb.using(browser))
 *      .attemptsTo(
 *          Ensure.that(
 *              Text.ofAll(shoppingListItems()),
 *              equals([ 'Coffee', 'Honey', 'Chocolate' ])
 *          ),
 *      )
 *
 * @example <caption>Find element with matching text</caption>
 *  import { actorCalled } from '@serenity-js/core';
 *  import { contain, Ensure } from '@serenity-js/assertions';
 *  import { BrowseTheWeb, by, CSSClasses, Target, Text } from '@serenity-js/webdriverio';
 *
 *  const shoppingListItemCalled = (name: string) =>
 *      Target.the('shopping list items').located(by.css('#shopping-list li'))
 *          .where(Text, equals(name))
 *          .first()
 *
 *  actorCalled('Lisa')
 *      .whoCan(BrowseTheWeb.using(browser))
 *      .attemptsTo(
 *          Ensure.that(
 *              CSSClasses.of(shoppingListItemCalled('Honey)),
 *              contain('bought')
 *          ),
 *      )
 *
 * @public
 * @see {@link Target}
 */
export class Text {

    /**
     * @desc
     *  Retrieves text of a single {@link WebElement},
     *  represented by Answerable<{@link @wdio/types~Element}>.
     *
     * @param {Answerable<Element>} element
     * @returns {Question<Promise<string>> & MetaQuestion<Answerable<Element>, Promise<string>>}
     *
     * @see {@link @serenity-js/core/lib/screenplay/questions~MetaQuestion}
     */
    static of(element: Answerable<Element>): Question<Promise<string>> & MetaQuestion<Answerable<Element>, Promise<string>> {
        return new TextOfSingleElement(element);
    }

    /**
     * @desc
     *  Retrieves text of a group of {@link WebElement}s,
     *  represented by Answerable<{@link @wdio/types~ElementList}>
     *
     * @param {Answerable<ElementList>} elements
     * @returns {Question<Promise<string[]>> & MetaQuestion<Answerable<Element>, Promise<string[]>>}
     *
     * @see {@link @serenity-js/core/lib/screenplay/questions~MetaQuestion}
     */
    static ofAll(elements: Answerable<ElementList>): Question<Promise<string[]>> & MetaQuestion<Answerable<Element>, Promise<string[]>> {
        return new TextOfMultipleElements(elements);
    }
}

class TextOfSingleElement
    extends ElementQuestion<Promise<string>>
    implements MetaQuestion<Answerable<Element>, Promise<string>>
{
    constructor(private readonly element: Answerable<Element>) {
        super(`the text of ${ element }`);
    }

    of(parent: Answerable<Element>): Question<Promise<string>> {
        return new TextOfSingleElement(new TargetNestedElement(parent, this.element));
    }

    async answeredBy(actor: AnswersQuestions & UsesAbilities): Promise<string> {
        const element = await this.resolve(actor, this.element);

        return element.getText();
    }
}

class TextOfMultipleElements
    extends ElementQuestion<Promise<string[]>>
    implements MetaQuestion<Answerable<Element>, Promise<string[]>>
{
    constructor(private readonly elements: Answerable<ElementList>) {
        super(`the text of ${ elements }`);
    }

    of(parent: Answerable<Element>): Question<Promise<string[]>> {
        return new TextOfMultipleElements(new TargetNestedElements(parent, this.elements));
    }

    async answeredBy(actor: AnswersQuestions & UsesAbilities): Promise<string[]> {
        const elements = await this.resolve(actor, this.elements);
        return elements.map(element => element.getText());
    }
}