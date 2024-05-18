import 'mocha'

import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled, notes } from '@serenity-js/core';
import { Navigate, Page } from '@serenity-js/web'; 

describe('Playwright no init', () => {

    describe('using browser with no init in before', () => {

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

