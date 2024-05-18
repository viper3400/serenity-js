import 'mocha'

import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled, Log, notes } from '@serenity-js/core';
import { Navigate, Page } from '@serenity-js/web'; 

describe('Playwright init', () => {

    describe('using browser with some init in before', () => {
        before(() => actorCalled('Francesca').attemptsTo(
            Log.the('let actor do some stuff in before hook')
        ));

        it('opens a page and take a not', () => {
            return actorCalled('Francesca').attemptsTo(
                Navigate.to('https://serenity-js.org'),
                Ensure.that(Page.current().title(), includes('Serenity/JS')),
                notes().set('title', Page.current().title())
            )

        });

        it('ensure note', () => {
            return actorCalled('Francesca').attemptsTo(
                Ensure.that(notes().get('title'), includes('Serenity/JS'))
            )

        });
    });
});

