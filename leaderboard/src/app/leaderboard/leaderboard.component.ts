import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ILeaderBoardDto } from '../models/leaderBoard';
import { LEADERBOARD_DATA } from 'src/assets/mock-data/leaderboardData';

const LEADER_BOARD_MOCK_DATA: ILeaderBoardDto[] = LEADERBOARD_DATA;

/**
 * @title Data table with sorting and filtering.
 */

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements AfterViewInit {
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  columns = [
    {
      columnDef: 'wwcd',
      header: 'WWCD',
      cell: (element: ILeaderBoardDto) => `${element.wwcd}`,
    },
    {
      columnDef: 'finishes',
      header: 'FINISHES',
      cell: (element: ILeaderBoardDto) => `${element.finishes}`,
    },
    {
      columnDef: 'positionPoints',
      header: 'POSITION POINTS',
      cell: (element: ILeaderBoardDto) => `${element.positionPoints}`,
    },
    {
      columnDef: 'damage',
      header: 'DAMAGE',
      cell: (element: ILeaderBoardDto) => `${element.damage}`,
    },
    {
      columnDef: 'headShots',
      header: 'HEAD SHOTS',
      cell: (element: ILeaderBoardDto) => `${element.headShots}`,
    },
    {
      columnDef: 'suvTime',
      header: 'SUV. TIME',
      cell: (element: ILeaderBoardDto) => `${element.suvTime}`,
    },
    {
      columnDef: 'totalPoints',
      header: 'TOTAL POINTS',
      cell: (element: ILeaderBoardDto) => `${element.totalPoints}`,
    },
  ];

  public displayedColumns: string[] = this.columns.map((c) => c?.columnDef);
  public dataSource = new MatTableDataSource(LEADER_BOARD_MOCK_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /**
   * Method to get user input and filter the value inthe table dataSource
   * @param event
   */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
