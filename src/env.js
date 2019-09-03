const network =
  'rinkeby'
  // 'homestead'
  ;
module.exports = {
  categoryArray: [
    'Sports',
    'Politics',
    'Movies',
    'Tech',
    'Science',
    'Entertainment',
    'Celebrities',
    'Current',
    'Global',
    'Users Choice',
    'Market'
  ],
  subCategoryArray: [
    ['Football', 'Cricket', 'Baseball', 'Racing'],
    ['Good Politics', 'Dirty Politics'],
    ['English', 'Hindi', 'Marathi'],
    ['Computers', 'Electronics', 'Mechanical'],
    ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Astronomy'],
    ['Traveling','TV'],
    ['Actors', 'Actresses', 'Singers'],
    ['News', 'Issues'],
    ['Problems', 'Good things'],
    ['Career', 'Life Partner'],
    ['Stock Exchange', 'Crypto', 'Forex', 'Commodity']
  ],
  network,
  esContract: {
    address: network === 'homestead'
      ? '0xef1344bdf80bef3ff4428d8becec3eea4a2cf574'
      : '0x8abfef555d93104feb0e8dfac8fbeca29aff59bf',
    abi:[{constant:!0,inputs:[],name:"mintingFinished",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"contingencyFunds",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"newTalentsAndPartnerships",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"kmPardsBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"cap",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TimeAlly",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"UpdateLuckpool",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"platformMaintenance",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MonthCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"UpdateBurnBal",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_value",type:"uint256"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"burnTokenBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"AnnualNRTAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"marketingAndRNR",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"researchAndDevelopment",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contingencyFundsBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"kmPards",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_subtractedValue",type:"uint256"}],name:"decreaseApproval",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"LastNRTRelease",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"researchAndDevelopmentBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"finishMinting",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"timeSwappers",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"buzzCafe",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"MonthlyNRTRelease",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pool",type:"address[]"}],name:"UpdateAddresses",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"platformMaintenanceBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MonthlyNRTAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"timeSwappersNRT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"luckPoolBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TimeAllyNRT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"marketingAndRNRBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_addedValue",type:"uint256"}],name:"increaseApproval",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"buzzCafeNRT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"newTalentsAndPartnershipsBal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"TokenTransferList",type:"address[100]"},{name:"TokenTransferBalance",type:"uint256[100]"}],name:"UpdateBalance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"pool",type:"string"},{indexed:!1,name:"sendAddress",type:"address"}],name:"PoolAddressAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"luckPoolBal",type:"uint256"}],name:"LuckPoolUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"burnTokenBal",type:"uint256"}],name:"BurnTokenBalUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"NRTReleased",type:"uint256"}],name:"NRTDistributed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"pool",type:"string"},{indexed:!1,name:"sendAddress",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"NRTTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"TokensBurned",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[],name:"MintFinished",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"}],name:"OwnershipRenounced",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"burner",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}]
  },
  betdeex: {
    address: network === 'homestead'
      ? '0x42225682113E6Ed3616B36B4A72BbaE376041D7c'
      : '0x8a2417c1f6cf57011b3bbd9b1fdc3e57715ffe3a',
    abi:[{"constant":!1,"inputs":[{"name":"_manager","type":"address"}],"name":"addManager","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_from","type":"address"},{"name":"_betTokensInExaEs","type":"uint256"}],"name":"collectBettorTokens","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_platformFee","type":"uint256"}],"name":"collectPlatformFee","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_description","type":"string"},{"name":"_category","type":"uint8"},{"name":"_subCategory","type":"uint8"},{"name":"_minimumBet","type":"uint256"},{"name":"_prizePercentPerThousand","type":"uint256"},{"name":"_isDrawPossible","type":"bool"},{"name":"_pauseTimestamp","type":"uint256"}],"name":"createBet","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_ender","type":"address"},{"name":"_result","type":"uint8"},{"name":"_gasFee","type":"uint256"}],"name":"emitEndEvent","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_bettorAddress","type":"address"},{"name":"_choice","type":"uint8"},{"name":"_betTokensInExaEs","type":"uint256"}],"name":"emitNewBettingEvent","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_manager","type":"address"}],"name":"removeManager","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"_to","type":"address"},{"name":"_tokensInExaEs","type":"uint256"}],"name":"sendTokensToAddress","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_esTokenContractAddress","type":"address"}],"payable":!1,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":!1,"inputs":[{"indexed":!0,"name":"_deployer","type":"address"},{"indexed":!1,"name":"_contractAddress","type":"address"},{"indexed":!0,"name":"_category","type":"uint8"},{"indexed":!0,"name":"_subCategory","type":"uint8"},{"indexed":!1,"name":"_description","type":"string"}],"name":"NewBetContract","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"name":"_betAddress","type":"address"},{"indexed":!0,"name":"_bettorAddress","type":"address"},{"indexed":!0,"name":"_choice","type":"uint8"},{"indexed":!1,"name":"_betTokensInExaEs","type":"uint256"}],"name":"NewBetting","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"name":"_ender","type":"address"},{"indexed":!0,"name":"_contractAddress","type":"address"},{"indexed":!1,"name":"_result","type":"uint8"},{"indexed":!1,"name":"_prizePool","type":"uint256"},{"indexed":!1,"name":"_platformFee","type":"uint256"}],"name":"EndBetContract","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"name":"_betContract","type":"address"},{"indexed":!0,"name":"_to","type":"address"},{"indexed":!1,"name":"_tokensInExaEs","type":"uint256"}],"name":"TransferES","type":"event"},{"constant":!0,"inputs":[{"name":"","type":"address"}],"name":"betBalanceInExaEs","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"uint256"}],"name":"bets","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"getNumberOfBets","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"address"}],"name":"isBetValid","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"address"}],"name":"isManager","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"superManager","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"}]
  },
  bet: {
    abi:[{"constant":!0,"inputs":[{"name":"_bettorAddress","type":"address"}],"name":"seeWinnerPrize","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"uint256"}],"name":"totalBetTokensInExaEsByChoice","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"uint256"}],"name":"getNumberOfChoiceBettors","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"minimumBetInExaEs","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[],"name":"withdrawPrize","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"address"}],"name":"bettorHasClaimed","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"isDrawPossible","outputs":[{"name":"","type":"bool"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"bettorBetAmountInExaEsByChoice","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"subCategory","outputs":[{"name":"","type":"uint8"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"totalPrize","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"betBalanceInExaEs","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"endTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"pauseTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"creationTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"name":"_choice","type":"uint8"},{"name":"_betTokensInExaEs","type":"uint256"}],"name":"enterBet","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"prizePercentPerThousand","outputs":[{"name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"endedBy","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"name":"_choice","type":"uint8"}],"name":"endBet","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"category","outputs":[{"name":"","type":"uint8"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"finalResult","outputs":[{"name":"","type":"uint8"}],"payable":!1,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_description","type":"string"},{"name":"_category","type":"uint8"},{"name":"_subCategory","type":"uint8"},{"name":"_minimumBetInExaEs","type":"uint256"},{"name":"_prizePercentPerThousand","type":"uint256"},{"name":"_isDrawPossible","type":"bool"},{"name":"_pauseTimestamp","type":"uint256"}],"payable":!1,"stateMutability":"nonpayable","type":"constructor"}]
  }
};
