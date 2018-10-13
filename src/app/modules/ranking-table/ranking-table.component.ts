import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import {MatSort, MatTableDataSource, MatSortable} from '@angular/material';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss']
})
export class RankingTableComponent implements OnInit {
  headElements = ['#','name', 'squat', 'bench', 'deadlift', 'total', 'wilks'];
  sortableColumns = ['squat','bench','deadlift','total','wilks'];
  columnToOrderBy  = "";
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    this.users.sort((user1, user2) => user2.wilks - user1.wilks);
    this.setupTable();

  }

  setupTable(){
    this.dataSource.data = this.users;
    this.dataSource.sort = this.sort;
    this.sort.direction = "desc";
    this.sort.active = "wilks";
    this.columnToOrderBy = this.sort.active;
  }

  sortTable(){
    this.sort.direction = 'desc';

    console.log(this.sort);
    this.sort.sort(<MatSortable> {
      id: this.columnToOrderBy,
      start: 'desc'
    });
  }

  selectUser(user){
    console.log(user);
  }



  

}
