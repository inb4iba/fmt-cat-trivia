import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NoAccessComponent } from "./pages/no-access/no-access.component";
import { AccessGuard } from "./shared/guards/access.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AccessGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "no-access",
    component: NoAccessComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
