import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public panelData = [
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT', listData: ['Class', 'Class1', 'Class2', 'Class3'] },
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT1', listData: ['dog', 'dog1', 'dog2', 'dog3']  },
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT2', listData: ['work', 'work1', 'work2', 'work3']  },
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT3', listData: ['radio', 'radio1', 'radio2', 'radio3']  },
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT4', listData: ['don', 'don1', 'don2', 'don3']  },
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT5', listData: ['school', 'school1', 'school2', 'school3']  },
    { titleIcon: '../../assets/Tile/power-cord.png', title: 'LIGHT6', listData: ['pc', 'pc1', 'pc2', 'pc3']  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
