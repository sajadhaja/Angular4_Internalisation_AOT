# InternationalizationSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## to create source translation file

        "./node_modules/.bin/ng-xi18n" --i18nFormat=xlf --outFile=messages.xlf

##AOT compiler 

Refer link https://github.com/angular/angular-cli/wiki/stories-internationalization 

Commands for AOT

extraction :: ng xi18n --output-path src/locale

serve :: ng serve --aot --locale fr --i18n-format xlf --i18n-file src/locale/messages.fr.xlf --missing-translation error

build ::
 To build your application with a specific locale you can use the exact same commands that you used for serve:

        ng build --aot --locale fr --i18n-format xlf --i18n-file src/i18n/messages.fr.xlf --missing-translation error

When you build your application for a specific locale, it is probably a good idea to change the output path with the command --output-path in order to save the files to a different location.

        ng build --aot --output-path dist/fr --locale fr --i18n-format xlf --i18n-file src/i18n/messages.fr.xlf --missing-translation error

If you end up serving this specific version from a subdirectory, you can also change the base url used by your application with the command --base-href.

For example if the french version of your application is served from https://myapp.com/fr/ then you would build the french version like this:

        ng build --aot --output-path dist/fr --base-href fr --locale fr --i18n-format xlf --i18n-file src/i18n/messages.fr.xlf --missing-translation error




