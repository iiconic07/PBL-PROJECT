exports.defults = series(scssTask , jsTask,browserSyncserve,watchTask)
exports.build = series (scssTask,jsTask);