import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full',
    },
    {
        path: 'todo',
        loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule),
    },
    {
        path: '**',
        redirectTo: 'todo',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
