import { TestRunnerTagger } from '@integration/testing-tools';
import { ArtifactArchiver, configure, Duration, NoOpDiffFormatter } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { BrowserContextOptions } from 'playwright/test';
import * as playwright from 'playwright-core';
let browser: playwright.Browser;
let page: playwright.Page;

import { defineConfig, devices } from '@playwright/test';

import { PageActors } from './PageActors';


export default defineConfig({
    projects: [
    /* Test against branded browsers. */
        {
            name: 'Google Chrome',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
        },
    ],
});
export const mochaHooks = {
    async beforeAll(): Promise<void> {
        browser = await playwright.chromium.launch({
            channel: 'chrome',
            headless: false
        });


        const contextOptions: BrowserContextOptions = { baseURL: `http://localhost:${ process.env.PORT || '8080' }` };
        contextOptions.viewport = { height: 1600, width: 1920 };
        const context = await browser.newContext(contextOptions);
        page = await context.newPage();

        configure({
            actors: new PageActors(page, {
                baseURL: `http://localhost:${ process.env.PORT || '8080' }`,
                defaultNavigationTimeout:   Duration.ofSeconds(1000).inMilliseconds(),
                defaultTimeout:             Duration.ofMilliseconds(750).inMilliseconds(),
            }),
            diffFormatter: new NoOpDiffFormatter(),
            crew: [
                new TestRunnerTagger('playwright'),
                ArtifactArchiver.storingArtifactsAt(`${ process.cwd() }/target/site/serenity`),
                // Photographer.whoWill(TakePhotosOfFailures),
                SerenityBDDReporter.fromJSON({
                    specDirectory: './node_modules/@integration/web-specs/spec'
                }),
                '@serenity-js/console-reporter',
                // new StreamReporter(fs.createWriteStream('./events.ndjson'))
            ]
        });
    },

    async afterAll(): Promise<void> {
        if (browser) {
            await browser.close()
        }
    }
}
