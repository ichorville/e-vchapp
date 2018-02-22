import { Injectable } from '@angular/core';

@Injectable()
export class PurchaseOrderService {

    allAgents(): Promise<any[]> {
        return Promise.resolve(true).then(() => {
            return this.agents;
        });
    }

    getByID(id: any): Promise<any> {
        let serial = this.serials.filter((element) => {
			return element.id == id;
		});
		return Promise.resolve(serial[0]);
    }

    getOrders(object: any): Promise<any[]> {
        return Promise.resolve(true).then(() => {
            return this.orders;
        });
    }

    getSerials(object: any): Promise<any[]> {
        return Promise.resolve(true).then(() => {
            return this.serials;
        });
    }

    orders = [
        {
            id: 1,
            item: 'Voucher 100',
            qty: 20
        },
        {
            id: 2,
            item: 'Voucher 50',
            qty: 90
        },
        {
            id: 3,
            item: 'Voucher 20',
            qty: 220
        },
        {
            id: 4,
            item: '3G Logo Sticker',
            qty: 57
        },
        {
            id: 5,
            item: 'Ayubowan Sticker',
            qty: 65
        },
        {
            id: 6,
            item: 'AIM_GAMATA_3G',
            qty: 20
        },
        {
            id: 7,
            item: 'HUTCH CARD 100',
            qty: 89
        },
        {
            id: 8,
            item: 'HUTCH CARD 1000',
            qty: 20
        },
        {
            id: 9,
            item: 'HUTCH CARD 20',
            qty: 30
        },
        {
            id: 10,
            item: 'HUTCH CARD 200',
            qty: 20
        },
        {
            id: 11,
            item: 'HUTCH DATACARD 39',
            qty: 46
        },
        {
            id: 12,
            item: 'HUTCH DATACARD 197',
            qty: 20
        },
        {
            id: 13,
            item: 'HUTCH DATACARD 290',
            qty: 100
        },
        {
            id: 14,
            item: 'HUTCH DATACARD 198',
            qty: 80
        },
        {
            id: 15,
            item: 'HUTCH DATACARD 89 (PACK 2)',
            qty: 15
        }
    ];

    agents = [
        {
            id: 1,
            name: 'Cranjus McBasketball'
        }, 
        {
            id: 2,
            name: 'Minty Cherubandtug'
        }, 
        {
            id: 3,
            name: 'Mary Beth BethBeth'     
        }, 
        {
            id: 4,
            name: 'Helena Bottom-Farter'        
        }, 
        {
            id: 5,
            name: 'Beefy McWhatnow'
        },
        {
            id: 6,
            name: 'Tammy BundleBalls' 
        }, 
        {
            id: 7,
            name: 'Captain Melvin Seashorse'       
        }, 
        {
            id: 8,
            name: 'Dr. Shrimp Puerto Rico'
        }, 
        {
            id: 9,
            name: 'Simmy Cantstandyourbitz'
        }, 
        {
            id: 10,
            name: 'Wandamian Crucifixplate' 
        },
        {
            id: 11,
            name: 'Denise Fat'  
        }, 
        {
            id: 12,
            name: 'Jury Prosciutto'  
        }, 
        {
            id: 13,
            name: 'Rickyticky Bobbywobbin'   
        }, 
        {
            id: 14,
            name: 'Dungaresse Weatherspoons' 
        }, 
        {
            id: 15,
            name: 'Eyna Mouthhole'  
        }
    ]; 

    serials = [
        {
            id: 1,
            name: 'Cranjus McBasketball'
        }, 
        {
            id: 2,
            name: 'Minty Cherubandtug'
        }, 
        {
            id: 3,
            name: 'Mary Beth BethBeth'     
        }, 
        {
            id: 4,
            name: 'Helena Bottom-Farter'        
        }, 
        {
            id: 5,
            name: 'Beefy McWhatnow'
        },
        {
            id: 6,
            name: 'Tammy BundleBalls' 
        }, 
        {
            id: 7,
            name: 'Captain Melvin Seashorse'       
        }, 
        {
            id: 8,
            name: 'Dr. Shrimp Puerto Rico'
        }, 
        {
            id: 9,
            name: 'Simmy Cantstandyourbitz'
        }, 
        {
            id: 10,
            name: 'Wandamian Crucifixplate' 
        },
        {
            id: 11,
            name: 'Denise Fat'  
        }, 
        {
            id: 12,
            name: 'Jury Prosciutto'  
        }, 
        {
            id: 13,
            name: 'Rickyticky Bobbywobbin'   
        }, 
        {
            id: 14,
            name: 'Dungaresse Weatherspoons' 
        }, 
        {
            id: 15,
            name: 'Eyna Mouthhole'  
        }
    ];
}