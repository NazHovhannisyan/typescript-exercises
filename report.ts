type ValidAmount = "empty" | number

interface iClothesWarehouse {
	jackets: ValidAmount;
	hats: ValidAmount;
	socks: ValidAmount;
	pants: ValidAmount;
}

interface iStationeryWarehouse {
	scissors: ValidAmount;
	paper: "empty" | boolean;
}

interface iAppliancesWarehouse {
	dishwashers: ValidAmount;
	cookers: ValidAmount;
	mixers: ValidAmount;
}

interface iTotalWarehouse extends iClothesWarehouse, iStationeryWarehouse, iAppliancesWarehouse{
	deficit: boolean;
	date: Date;
}


const totalData: iTotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
    deficit: true,
    date: new Date()
};


function printReport(data: iTotalWarehouse): string{
     const result:string = Object.entries(data) 
      .filter(item => item[1] === "empty")
      .reduce((res, item) => `${res} ${item[0]}`, "")
      if( result.trim().length){
        return `We need this items: ${result.slice(0, -1)}`;
      }else{
         return "Everything fine";
      }	
 }
 console.log(printReport(totalData));
