# javelin-bp
Boilerplate build process for starting a new site in Javelin CMS.

###Tasks
There are more tasks at work during the build process, but these three should be the only ones you need to work with.

`gulp build`
Start the build process.

`gulp clean`
Remove build files completely. This automatically happens when using the `gulp build` task.

`gulp help`
Display a listing of all tasks contained in `gulpfile.js`.


###Additional Files
Located within the `ai` directory are several Adobe Illustrator files and SVG files that come packaged with newly generated site templates. These are just placeholders and are meant to be replaced. The `.ai` files are also placeholders and are meant to be edited and saved over.


###Issues
**Multiple Templates** - Currently, only one template directory can be generated at a time. So if you are starting a new project that will make use of a separate desktop and mobile website, you have to generate the first template and move it out of the build directory. After that is done, you can generate the second template and do the same.

**Injecting Scripts** - This feature is currently commented out. We wanted to use `gulp-inject` to inject an array of strings as script tags in our html files. This has turned out to be impossible with `gulp-inject` but we may be able to make a compromise by keeping a directory of empty files, properly name so they can be referenced when injecting.
