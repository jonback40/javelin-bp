# javelin-bp
Boilerplate build process for starting a new site in Javelin CMS.

### Getting Started
* Open a command line prompt and use the `cd` command to go to the location where this program will be stored.
* Clone the repository with the `git clone` command.
* Run `npm install`.


### Tasks
There are more tasks at work during the build process, but these three should be the only ones you need to work with.

```
gulp build [--type]    Start the build process by using either param: --desktop, --mobile or --responsive.
gulp clean             Remove build files completely. This automatically happens when using the build task.
gulp help              Display a listing of all tasks contained in gulpfile.js.
```

### Additional Files
Located within the `./ai` directory are several Adobe Illustrator files and `.svg` files that come packaged with newly generated site templates. These are just placeholders and are meant to be replaced. The `.ai` files are also placeholders and are meant to be edited and saved over.


### Usage
The `gulp build [--type]` command will guide you through the process of generating boilerplate files for either a **desktop**, **mobile** or **responsive** website project. Once the task is complete, you must locate the `./build` directory that was created by the task and move its contents to your project.

If you are generating files for both a **desktop and mobile** site, you have to generate them separately and move the generated files after each build, otherwise the `clean` task will remove the previous build files and you will need to regenerate them.
