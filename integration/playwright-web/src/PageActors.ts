import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright, PlaywrightOptions } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';
import * as playwright from 'playwright-core';

export class PageActors implements Cast {
    constructor(
        private readonly page: playwright.Page,
        private readonly options: PlaywrightOptions,
    ) {
    }

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWebWithPlaywright.usingPage(this.page, this.options),
            TakeNotes.usingAnEmptyNotepad(),
            CallAnApi.at(this.options.baseURL)
        );
    }
}
