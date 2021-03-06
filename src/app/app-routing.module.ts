import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './routerS/auth/auth.guard';
import { ComposeMessageComponent } from './routerS/compose-message/compose-message.component';
import { CrisisListComponent } from './routerS/crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './routerS/heroes/hero-list/hero-list.component';
import { NotFoundComponent } from './routerS/not-found/not-found.component';


const routes: Routes = [
  {
    path:'admin',
    loadChildren: ()=> import('./routerS/admin/admin.module').then(m=>m.AdminModule),
    canLoad:[AuthGuard],
  },
  {
    path:'',
    redirectTo:'/heroes',
    pathMatch:'full'},
  {
    path:"**",
    component:NotFoundComponent
  },
];
const nameRoutes = [
  {path:'compose',component:ComposeMessageComponent,outlet:'popup',}
];
@NgModule({
  imports: [RouterModule.forRoot(routes.concat(nameRoutes),
    {
    //  enableTracing:true,
     onSameUrlNavigation:'reload',
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
