export const abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"randExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"requestRand","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"arrIdx2lost","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"winners","outputs":[{"name":"submitter","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"submitRand","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_guess","type":"uint256[]"}],"name":"submitPredWindow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"arrIdx2predUnitArr","outputs":[{"name":"submitter","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"},{"name":"c","type":"uint256"}],"name":"wrapSub","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"receivedRand","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_window","type":"uint256[]"}],"name":"receivedPred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"requestedRand","type":"event"}];

export const address = '0xaB338DB878F7CE6f2B9BDc90dF700ebb0B88A30E';

export const bytecode = "60806040526064600090815561035960019081556002819055600381905560045560058190556006805460ff191690555b60005481101561006d576000818152600860209081526040808320805460ff19908116909155600b90925290912080549091169055600101610030565b5060408051808201909152308152600060208083018281529180526007815291517f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df8054600160a060020a0392909216600160a060020a0319909216919091179055517f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6e055600b90527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76805460ff19166001179055610b49806101316000396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663367f734b811461008f578063553f4fb3146100bb5780637c513a21146100d5578063a2fb1175146100ed578063a825667214610128578063b33a0a1e14610133578063e4a481ca1461017b578063f6fb771e14610196575b005b34801561009b57600080fd5b506100a76004356101b4565b604080519115158252519081900360200190f35b6100c36101c9565b60408051918252519081900360200190f35b3480156100e157600080fd5b506100a760043561065d565b3480156100f957600080fd5b50610105600435610672565b60408051600160a060020a03909316835260208301919091528051918290030190f35b61008d600435610697565b6040805160206004803580820135838102808601850190965280855261008d9536959394602494938501929182918501908490808284375094975061084e9650505050505050565b34801561018757600080fd5b506101056004356024356109d4565b3480156101a257600080fd5b506100c3600435602435604435610a19565b60086020526000908152604090205460ff1681565b60008060008060008060015434101515156101e357600080fd5b6101f36004546001600054610a19565b60065490955060ff161561027c576005546001546102169163ffffffff610a3516565b9050600091505b60055482101561027757600082815260096020526040808220549051600160a060020a039091169183156108fc02918491818181858888f1935050505015801561026b573d6000803e3d6000fd5b5060019091019061021d565b6105fa565b6000600581905591505b6000858152600a602052604090205482101561036157600085815260076020908152604080832060010154600a9092529091208054849081106102c557fe5b9060005260206000209060020201600101541415610356576000858152600a602052604090208054839081106102f757fe5b600091825260208083208584526009909152604090922060029091029091018054825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255600190810154918101919091556005805490910190555b600190910190610286565b600060055411156104d5576000858152600b602052604090205460ff161561039f576005546001546103989163ffffffff610a3516565b90506103cb565b6103c86103b9600554600154610a3590919063ffffffff16565b6003549063ffffffff610a4c16565b90505b600091505b60055482101561042a57600082815260096020526040808220549051600160a060020a039091169183156108fc02918491818181858888f1935050505015801561041e573d6000803e3d6000fd5b506001909101906103d0565b600080805260096020527fec8156718a8372b1db44bb411437d0870f3e3790d4a08526d024ce1b0b668f6b54604051600160a060020a0390911691303180156108fc02929091818181858888f1935050505015801561048d573d6000803e3d6000fd5b50600091505b6000548210156104c3576000828152600b60205260409020805460ff191660019081179091559190910190610493565b6006805460ff191660011790556105fa565b6104e28560008054610a19565b600081815260076020526040902054600154919550600160a060020a0316906108fc9061051690600463ffffffff610a3516565b6040518115909202916000818181858888f1935050505015801561053e573d6000803e3d6000fd5b50600091505b6000548210156105fa5761055b8583600054610a19565b935061056e82600263ffffffff610a4c16565b60008581526008602052604090205490935060ff16156105ef57600084815260076020526040902054600160a060020a03166108fc6105c56105b6868063ffffffff610a5916565b6001549063ffffffff610a3516565b6040518115909202916000818181858888f193505050501580156105ed573d6000803e3d6000fd5b505b600190910190610544565b600085815260076020908152604091829020600101548251908152915133927f016c738cf55c84b2c393c2475f8b09113672c7d7c9d5ea3b50dc55cf62afe9f392908290030190a250505060009182525060076020526040902060010154919050565b600b6020526000908152604090205460ff1681565b60096020526000908152604090208054600190910154600160a060020a039091169082565b61069f610aa3565b6002543410156106ae57600080fd5b60018210156106bc57600080fd5b620100008211156106cc57600080fd5b5060408051808201825233815260208082018490526004546000908152600b909152919091205460ff16151561074857600454600090815260076020526040808220546002549151600160a060020a039091169282156108fc02929190818181858888f19350505050158015610746573d6000803e3d6000fd5b505b6004805460009081526007602090815260408083208551815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039091161781558583015160019182015584548452600b8352818420805460ff19908116909155945484526008909252909120805490921617905560065460ff16156107df576004546000908152600a602052604081206107df91610aba565b6006805460ff19169055600054600454610811919061080590600163ffffffff610a4c16565b9063ffffffff610a8216565b60045560408051838152905133917f0134ba41d2ecd878a2c82b11e5378a4b385f56eb4480616dc96d21b6250be1e6919081900360200190a25050565b600080610859610aa3565b835160035461086d9163ffffffff610a5916565b34101561087957600080fd5b6000548451111561088957600080fd5b6108996004546001600054610a19565b9250600091505b835182101561095a57604080519081016040528033600160a060020a0316815260200185848151811015156108d157fe5b906020019060200201518152509050600a600080548585018115156108f257fe5b0681526020808201929092526040016000908120805460018082018355918352918390208451600290930201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909316929092178255918301519082015591909101906108a0565b604080516020808252865181830152865133937f9de3ef3194a8892d39af16e95ec99bfd9b87adf911a0cb1a8779d3c560838b4093899390928392830191808601910280838360005b838110156109bb5781810151838201526020016109a3565b505050509050019250505060405180910390a250505050565b600a602052816000526040600020818154811015156109ef57fe5b600091825260209091206002909102018054600190910154600160a060020a039091169250905082565b6000610a2d8385038363ffffffff610a8216565b949350505050565b60008183811515610a4257fe5b0490505b92915050565b81810182811015610a4657fe5b6000821515610a6a57506000610a46565b50818102818382811515610a7a57fe5b0414610a4657fe5b6000811515610a9057600080fd5b8183811515610a9b57fe5b069392505050565b604080518082019091526000808252602082015290565b5080546000825560020290600052602060002090810190610adb9190610ade565b50565b610b1a91905b80821115610b1657805473ffffffffffffffffffffffffffffffffffffffff1916815560006001820155600201610ae4565b5090565b905600a165627a7a72305820f6267d5b9966b9e6712ffbbd87dc343617c5d74755e3bfeca0d4d2be169a5a970029";

