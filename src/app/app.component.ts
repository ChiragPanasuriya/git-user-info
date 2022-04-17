import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ConfigService } from './config.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'git-info';
	userinfo: any;
	userRepoInfo: any;
	repoPRList: any;
	newPRList: any;
	selectedUser: any;
	selectedRepo: any;

	constructor(private configService: ConfigService) {

	}

	ngOnInit() {
		this.configService.getConfig()
			.subscribe((data: any) => {
				// 9 set as pagination, can increase and decrease upon records to display
				this.userinfo = data.items.slice(0, 9);
			});
	}

	getRepoforUser(userid: any) {
		this.selectedUser = userid;
		this.userRepoInfo = [];
		this.repoPRList = [];
		this.selectedRepo = '';
		this.configService.getRepo(userid).subscribe((repo: any) => {
			this.userRepoInfo = repo;
			if (repo.length > 5) {
				this.userRepoInfo = repo.slice(0, 5);
			}
		})
	}

	showuserPR(repoName: string) {
		this.selectedRepo = repoName;
		this.configService.getRepoPR(this.selectedUser, repoName).subscribe((repo: any) => {
			this.repoPRList = repo;
			this.repoPRList = _.filter(
				this.repoPRList, function (obj) {
					return (obj.state == 'open');
				}
			);
			if (this.repoPRList.length > 10) {
				this.repoPRList = this.repoPRList.slice(0, 10);
			}
		})
	}

	getPRState(prInfo: any) {
		let prdate = prInfo.created_at;
		prdate = new Date(prdate);
		let todayDate: any = new Date();
		const diffTime = Math.abs(todayDate - prdate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		if (diffDays >= 5) {
			return 'red'
		} else if (diffDays >= 2) {
			return 'yellow';
		} else {
			return '';
		}

	}

}
