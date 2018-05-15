import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AppConfig } from '../../Utilities/AppConfig';

import { WelcomePage } from '../welcome/welcome';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  welcomeRoot = WelcomePage;
  
  popOver:any[]=[];
  treeItems:any[]=[];

  constructor(
    private _storage: Storage,
    public navCtrl: NavController,
    private _appConfig:AppConfig,) {


      this.popOver.push({
        isSmallList:false,
        icon:"fa fa-envelope-o",
        heading:"You have 4 messages",
        footer:"See all messages",
        body:[
            {
                Title:'Item1',
                Image:'assets/Content/Images/user2-160x160.jpg',
                Text:'My title1',
                Time:'5 min',
                IsSeen:false
            },
            {
                Title:'Item2',
                Image:'assets/Content/Images/user2-160x160.jpg',
                Text:'My title2',
                Time:'15 min',
                IsSeen:true
            },
            {
                Title:'Item3',
                Image:'assets/Content/Images/user2-160x160.jpg',
                Text:'My title3',
                Time:'25 min',
                IsSeen:false
            },
            {
                Title:'Item4',
                Image:'assets/Content/Images/user2-160x160.jpg',
                Text:'My title4',
                Time:'35 min',
                IsSeen:true
            }
        ]
    });


    this.popOver.push(
      {
        isSmallList:true,
        icon:"fa fa-bell-o",
        heading:"You have 4 messages",
        footer:"view more",
        body:[
            {Title:'Item1',IsSeen:false},
            {Title:'Item2',IsSeen:true},
            {Title:'Item3',IsSeen:false},
            {Title:'Item4',IsSeen:true},
            {Title:'Item4',IsSeen:false},
            {Title:'Item4',IsSeen:false}
        ]
    }
    );

    this.treeItems=[
        {
            menuItem:"Dashboard",
            icon:"fa fa-dashboard",
            rightContent:[
            ],
            subMenu:[
            ]
        },
        {
            menuItem:"GameBoard",
            icon:"fa fa-gamepad",
            rightContent:[
            ],
            subMenu:[
            ]
        },
        {
            menuItem:"Profile",
            icon:"fa fa-user",
            rightContent:[
            ],
            subMenu:[
            ]
        },
        {
            menuItem:"Account",
            icon:"fa fa-credit-card",
            rightContent:[
            ],
            subMenu:[
            ]
        }
    ];
  }

}
