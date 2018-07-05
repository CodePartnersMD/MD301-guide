'use strict'

page('/', ctx => app.Task.fetchAll(app.taskView.initIndexPage));
page('/tasks/add', ctx => app.taskView.initAddForm(ctx));
page('/tasks/:task_id', ctx => app.Task.fetchOne(ctx, app.taskView.initDetailPage));
page();
