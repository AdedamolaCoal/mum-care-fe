import { Component, OnInit } from "@angular/core";
import { LoadingService } from "./loading.service";

@Component({
  selector: "app-preloader",
  standalone: true,
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class PreloaderComponent implements OnInit {
  isLoading = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }
}
