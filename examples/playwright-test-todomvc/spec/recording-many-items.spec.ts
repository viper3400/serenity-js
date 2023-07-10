import { List } from '@serenity-js/core';
import { describe, it } from '@serenity-js/playwright-test';

import { MANY_TODO_ITEMS } from './lot-of-test-data';
import {
    startWithAnEmptyList,
} from './todo-list-app/TodoApp';
import { recordItem } from './todo-list-app/TodoItem';

describe('Recording many items', () => {

    /**
     * You can override the default actor name and the Serenity/JS "crew" in playwright.config.ts,
     * or in the test scenarios themselves.
     */
    // test.use({
    //     defaultActorName: 'Serena',
    //     crew: [
    //         Photographer.whoWill(TakePhotosOfFailures),
    //         // Photographer.whoWill(TakePhotosOfInteractions),
    //     ],
    // });

    describe('Todo List App', () => {

        it('should allow me to add todo items', async ({ actor }) => {
            await actor.attemptsTo(
                startWithAnEmptyList(),
                List.of(MANY_TODO_ITEMS).forEach( ({actor, item}) => actor.attemptsTo(recordItem(item)))

            );
        });
      
    });
});
