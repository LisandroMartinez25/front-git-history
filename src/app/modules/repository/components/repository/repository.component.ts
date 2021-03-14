import { Component, OnInit } from '@angular/core';
import { IRepository } from 'src/app/shared/interfaces/repository';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  public repository: IRepository;

  constructor(
    private repositoryService: RepositoryService,
    private lodaingService: LoadingService
  ) {
    this.repository = {};
  }

  ngOnInit(): void {
    this.getRepository();
  }

  private getRepository(): void {
    this.repositoryService.getRepository().subscribe((repository: IRepository) => {
      this.repository = repository;
      this.lodaingService.changeLoading(false);
      console.log(repository);
    });
  }

}
