{
  "contractName": "checkList",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TaskCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TaskCreated",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "taskCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "createTask",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "toggleCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"completed\",\"type\":\"bool\"}],\"name\":\"TaskCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"completed\",\"type\":\"bool\"}],\"name\":\"TaskCreated\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_content\",\"type\":\"string\"}],\"name\":\"createTask\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"taskCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tasks\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"completed\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"toggleCompleted\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/andrew/eth-todo-list/contracts/checkList.sol\":\"checkList\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/andrew/eth-todo-list/contracts/checkList.sol\":{\"keccak256\":\"0x563f12c17e3109c2c048668381e49bd46590878b2d86b6c2ac214104db9fcead\",\"urls\":[\"bzz-raw://f9e709e441baa306cb1e28c3cf14a4ea96e4745ed27962af1e9048b91f52b7c0\",\"dweb:/ipfs/QmR2P34CdYhdRoE2r4ywtpf8nJ9sqB8BykgpHXEFvNzQzV\"]}},\"version\":1}",
  "bytecode": "0x60806040526000805534801561001457600080fd5b5060408051808201909152600a815269436c65616e5f526f6f6d60b01b6020820152610048906001600160e01b0361004d16565b61020c565b600080546001908101808355604080516060810182528281526020808201878152828401879052938652848152919094208451815591518051929361009a93908501929190910190610171565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b8381101561013257818101518382015260200161011a565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101b257805160ff19168380011785556101df565b828001600101855582156101df579182015b828111156101df5782518255916020019190600101906101c4565b506101eb9291506101ef565b5090565b61020991905b808211156101eb57600081556001016101f5565b90565b6106038061021b6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063111002aa14610051578063455f5024146100f95780638d97767214610116578063b6cb58a5146101bd575b600080fd5b6100f76004803603602081101561006757600080fd5b81019060208101813564010000000081111561008257600080fd5b82018360208201111561009457600080fd5b803590602001918460018302840111640100000000831117156100b657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101d7945050505050565b005b6100f76004803603602081101561010f57600080fd5b50356102fb565b6101336004803603602081101561012c57600080fd5b503561045b565b604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b83811015610180578181015183820152602001610168565b50505050905090810190601f1680156101ad5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6101c561050a565b60408051918252519081900360200190f35b600080546001908101808355604080516060810182528281526020808201878152828401879052938652848152919094208451815591518051929361022493908501929190910190610510565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b838110156102bc5781810151838201526020016102a4565b50505050905090810190601f1680156102e95780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150565b61030361058e565b60008281526001602081815260409283902083516060810185528154815281840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193858401939092908301828280156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b50505091835250506002919091015460ff161515602091820152604080830180511590526000858152600180845291902083518155838301518051949550859491936103fd93850192910190610510565b50604091820151600291909101805460ff1916911515919091179055818101518151848152901515602082015281517fe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1929181900390910190a15050565b600160208181526000928352604092839020805481840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193929091908301828280156104f75780601f106104cc576101008083540402835291602001916104f7565b820191906000526020600020905b8154815290600101906020018083116104da57829003601f168201915b5050506002909301549192505060ff1683565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061055157805160ff191683800117855561057e565b8280016001018555821561057e579182015b8281111561057e578251825591602001919060010190610563565b5061058a9291506105b1565b5090565b604051806060016040528060008152602001606081526020016000151581525090565b6105cb91905b8082111561058a57600081556001016105b7565b9056fea265627a7a72315820539ed9d716d28a64b73ba375740edf1890159b735932e63888f4a2e08f7596b364736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063111002aa14610051578063455f5024146100f95780638d97767214610116578063b6cb58a5146101bd575b600080fd5b6100f76004803603602081101561006757600080fd5b81019060208101813564010000000081111561008257600080fd5b82018360208201111561009457600080fd5b803590602001918460018302840111640100000000831117156100b657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101d7945050505050565b005b6100f76004803603602081101561010f57600080fd5b50356102fb565b6101336004803603602081101561012c57600080fd5b503561045b565b604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b83811015610180578181015183820152602001610168565b50505050905090810190601f1680156101ad5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6101c561050a565b60408051918252519081900360200190f35b600080546001908101808355604080516060810182528281526020808201878152828401879052938652848152919094208451815591518051929361022493908501929190910190610510565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b838110156102bc5781810151838201526020016102a4565b50505050905090810190601f1680156102e95780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150565b61030361058e565b60008281526001602081815260409283902083516060810185528154815281840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193858401939092908301828280156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b50505091835250506002919091015460ff161515602091820152604080830180511590526000858152600180845291902083518155838301518051949550859491936103fd93850192910190610510565b50604091820151600291909101805460ff1916911515919091179055818101518151848152901515602082015281517fe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1929181900390910190a15050565b600160208181526000928352604092839020805481840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193929091908301828280156104f75780601f106104cc576101008083540402835291602001916104f7565b820191906000526020600020905b8154815290600101906020018083116104da57829003601f168201915b5050506002909301549192505060ff1683565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061055157805160ff191683800117855561057e565b8280016001018555821561057e579182015b8281111561057e578251825591602001919060010190610563565b5061058a9291506105b1565b5090565b604051806060016040528060008152602001606081526020016000151581525090565b6105cb91905b8082111561058a57600081556001016105b7565b9056fea265627a7a72315820539ed9d716d28a64b73ba375740edf1890159b735932e63888f4a2e08f7596b364736f6c63430005100032",
  "sourceMap": "26:1278:1:-;;;119:1;95:25;;487:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;514:24:1;;;;;;;;;;;;-1:-1:-1;;;514:24:1;;;;;;-1:-1:-1;;;;;514:10:1;:24;:::i;:::-;26:1278;;598:238;681:9;:12;;;;;;;;;718:32;;;;;;;;;;;;;;;;;;;;;;;;699:16;;;;;;;;;;:51;;;;;;;;:16;;:51;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;792:39;804:9;;815:8;825:5;792:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;792:39:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;598:238;:::o;26:1278::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:1278:1;;;-1:-1:-1;26:1278:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "26:1278:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:1278:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;598:238;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;598:238:1;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;598:238:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;598:238:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;598:238:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;598:238:1;;-1:-1:-1;598:238:1;;-1:-1:-1;;;;;598:238:1:i;:::-;;860:442;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;860:442:1;;:::i;337:34::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;337:34:1;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;337:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;95:25;;;:::i;:::-;;;;;;;;;;;;;;;;598:238;681:9;:12;;;;;;;;;718:32;;;;;;;;;;;;;;;;;;;;;;;;699:16;;;;;;;;;;:51;;;;;;;;:16;;:51;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;792:39;804:9;;815:8;825:5;792:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;792:39:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;598:238;:::o;860:442::-;1001:17;;:::i;:::-;1021:10;;;;:5;:10;;;;;;;;;1001:30;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1001:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;1021:10;;1001:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1001:30:1;;;-1:-1:-1;;1001:30:1;;;;;;;;;;;;;;;1142:15;;;;;;1141:16;1123:34;;1001:30;1233:10;;;1001:30;1233:10;;;;;;:18;;;;;;;;;;1001:30;;-1:-1:-1;1001:30:1;;1233:10;;:18;;;;;;;;;:::i;:::-;-1:-1:-1;1233:18:1;;;;;;;;;;;;-1:-1:-1;;1233:18:1;;;;;;;;;;1281:15;;;;1262:35;;;;;;;;;;;;;;;;;;;;;;;;;860:442;;:::o;337:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;337:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;337:34:1;;;;;;;-1:-1:-1;;337:34:1;;;:::o;95:25::-;;;;:::o;26:1278::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:1278:1;;;-1:-1:-1;26:1278:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.16;\n\ncontract checkList {\n  //declare state variable with initial value\n  uint public taskCount = 0;\n  //create state variable for tasks\n\n  struct Task {\n    uint id;\n    string content;\n    bool completed;\n  }\n\n  //allows you to access the blockchain database\n  //creates uint of Tasks so each task has variables\n  mapping(uint => Task) public tasks;\n\n  event TaskCreated(uint id, string content, bool completed);\n  event TaskCompleted(uint id, bool completed);\n\n  constructor() public {\n    createTask(\"Clean_Room\");\n  }\n\n  //place the struct into the mapping via function\n  function createTask(string memory _content) public {\n    //change value by one\n    taskCount ++;\n    tasks[taskCount] = Task(taskCount, _content, false);\n    //call task creation event\n    emit TaskCreated(taskCount, _content, false);\n  }\n\n  //Check off Tasks\n  function toggleCompleted(uint _id) public {\n    //read task out of the mapping\n    //want to declare variable of type Task out of memory\n    Task memory _task = tasks[_id];\n    //invert the boolean state\n    //if false revert to true, if true revert to false\n    _task.completed = !_task.completed;\n    //lastly, put the task back into mapping with the completed flag.\n    tasks[_id] = _task;\n    emit TaskCompleted(_id, _task.completed);\n  }\n}\n",
  "sourcePath": "/home/andrew/eth-todo-list/contracts/checkList.sol",
  "ast": {
    "absolutePath": "/home/andrew/eth-todo-list/contracts/checkList.sol",
    "exportedSymbols": {
      "checkList": [
        132
      ]
    },
    "id": 133,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 38,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 132,
        "linearizedBaseContracts": [
          132
        ],
        "name": "checkList",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 41,
            "name": "taskCount",
            "nodeType": "VariableDeclaration",
            "scope": 132,
            "src": "95:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 39,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "95:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 40,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "119:1:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "canonicalName": "checkList.Task",
            "id": 48,
            "members": [
              {
                "constant": false,
                "id": 43,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 48,
                "src": "179:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 42,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "179:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45,
                "name": "content",
                "nodeType": "VariableDeclaration",
                "scope": 48,
                "src": "192:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 44,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "192:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47,
                "name": "completed",
                "nodeType": "VariableDeclaration",
                "scope": 48,
                "src": "212:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 46,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "212:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Task",
            "nodeType": "StructDefinition",
            "scope": 132,
            "src": "161:70:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 52,
            "name": "tasks",
            "nodeType": "VariableDeclaration",
            "scope": 132,
            "src": "337:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
              "typeString": "mapping(uint256 => struct checkList.Task)"
            },
            "typeName": {
              "id": 51,
              "keyType": {
                "id": 49,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "345:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "337:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                "typeString": "mapping(uint256 => struct checkList.Task)"
              },
              "valueType": {
                "contractScope": null,
                "id": 50,
                "name": "Task",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 48,
                "src": "353:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Task_$48_storage_ptr",
                  "typeString": "struct checkList.Task"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 60,
            "name": "TaskCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "394:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56,
                  "indexed": false,
                  "name": "content",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "403:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "419:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "393:41:1"
            },
            "src": "376:59:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 66,
            "name": "TaskCompleted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "458:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "458:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "467:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "457:25:1"
            },
            "src": "438:45:1"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "508:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436c65616e5f526f6f6d",
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "525:12:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c292a06aa3ff76631e25bdd6a6da06aa5d0ba2dcfcd6d571ecdb5caf9396ffee",
                          "typeString": "literal_string \"Clean_Room\""
                        },
                        "value": "Clean_Room"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c292a06aa3ff76631e25bdd6a6da06aa5d0ba2dcfcd6d571ecdb5caf9396ffee",
                          "typeString": "literal_string \"Clean_Room\""
                        }
                      ],
                      "id": 69,
                      "name": "createTask",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "514:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "514:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "514:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 74,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:2:1"
            },
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:0:1"
            },
            "scope": 132,
            "src": "487:56:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "649:187:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 80,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "681:12:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 79,
                      "name": "taskCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41,
                      "src": "681:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 81,
                  "nodeType": "ExpressionStatement",
                  "src": "681:12:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "699:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                          "typeString": "mapping(uint256 => struct checkList.Task storage ref)"
                        }
                      },
                      "id": 84,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 83,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "705:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "699:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_storage",
                        "typeString": "struct checkList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "723:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 87,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "734:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 88,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "744:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 85,
                        "name": "Task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "718:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Task_$48_storage_ptr_$",
                          "typeString": "type(struct checkList.Task storage pointer)"
                        }
                      },
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "718:32:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_memory",
                        "typeString": "struct checkList.Task memory"
                      }
                    },
                    "src": "699:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$48_storage",
                      "typeString": "struct checkList.Task storage ref"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "699:51:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "804:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "815:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 95,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "825:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 92,
                      "name": "TaskCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "792:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,string memory,bool)"
                      }
                    },
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "792:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 97,
                  "nodeType": "EmitStatement",
                  "src": "787:44:1"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "_content",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "618:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "617:24:1"
            },
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "649:0:1"
            },
            "scope": 132,
            "src": "598:238:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 130,
              "nodeType": "Block",
              "src": "902:400:1",
              "statements": [
                {
                  "assignments": [
                    105
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 105,
                      "name": "_task",
                      "nodeType": "VariableDeclaration",
                      "scope": 130,
                      "src": "1001:17:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                        "typeString": "struct checkList.Task"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 104,
                        "name": "Task",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 48,
                        "src": "1001:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$48_storage_ptr",
                          "typeString": "struct checkList.Task"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 109,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 106,
                      "name": "tasks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "1021:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                        "typeString": "mapping(uint256 => struct checkList.Task storage ref)"
                      }
                    },
                    "id": 108,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 107,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 101,
                      "src": "1027:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1021:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$48_storage",
                      "typeString": "struct checkList.Task storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1001:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 110,
                        "name": "_task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 105,
                        "src": "1123:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                          "typeString": "struct checkList.Task memory"
                        }
                      },
                      "id": 112,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "completed",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47,
                      "src": "1123:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "1141:16:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 105,
                          "src": "1142:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                            "typeString": "struct checkList.Task memory"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47,
                        "src": "1142:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1123:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "1233:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                          "typeString": "mapping(uint256 => struct checkList.Task storage ref)"
                        }
                      },
                      "id": 120,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 101,
                        "src": "1239:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1233:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_storage",
                        "typeString": "struct checkList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 121,
                      "name": "_task",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 105,
                      "src": "1246:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                        "typeString": "struct checkList.Task memory"
                      }
                    },
                    "src": "1233:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$48_storage",
                      "typeString": "struct checkList.Task storage ref"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1233:18:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 125,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 101,
                        "src": "1276:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 126,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 105,
                          "src": "1281:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                            "typeString": "struct checkList.Task memory"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47,
                        "src": "1281:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 124,
                      "name": "TaskCompleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "1262:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,bool)"
                      }
                    },
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1262:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 129,
                  "nodeType": "EmitStatement",
                  "src": "1257:40:1"
                }
              ]
            },
            "documentation": null,
            "id": 131,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toggleCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 101,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "885:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 100,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "885:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "884:10:1"
            },
            "returnParameters": {
              "id": 103,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "902:0:1"
            },
            "scope": 132,
            "src": "860:442:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 133,
        "src": "26:1278:1"
      }
    ],
    "src": "0:1305:1"
  },
  "legacyAST": {
    "absolutePath": "/home/andrew/eth-todo-list/contracts/checkList.sol",
    "exportedSymbols": {
      "checkList": [
        132
      ]
    },
    "id": 133,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 38,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 132,
        "linearizedBaseContracts": [
          132
        ],
        "name": "checkList",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 41,
            "name": "taskCount",
            "nodeType": "VariableDeclaration",
            "scope": 132,
            "src": "95:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 39,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "95:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 40,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "119:1:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "canonicalName": "checkList.Task",
            "id": 48,
            "members": [
              {
                "constant": false,
                "id": 43,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 48,
                "src": "179:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 42,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "179:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45,
                "name": "content",
                "nodeType": "VariableDeclaration",
                "scope": 48,
                "src": "192:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 44,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "192:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47,
                "name": "completed",
                "nodeType": "VariableDeclaration",
                "scope": 48,
                "src": "212:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 46,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "212:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Task",
            "nodeType": "StructDefinition",
            "scope": 132,
            "src": "161:70:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 52,
            "name": "tasks",
            "nodeType": "VariableDeclaration",
            "scope": 132,
            "src": "337:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
              "typeString": "mapping(uint256 => struct checkList.Task)"
            },
            "typeName": {
              "id": 51,
              "keyType": {
                "id": 49,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "345:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "337:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                "typeString": "mapping(uint256 => struct checkList.Task)"
              },
              "valueType": {
                "contractScope": null,
                "id": 50,
                "name": "Task",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 48,
                "src": "353:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Task_$48_storage_ptr",
                  "typeString": "struct checkList.Task"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 60,
            "name": "TaskCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "394:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56,
                  "indexed": false,
                  "name": "content",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "403:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "419:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "393:41:1"
            },
            "src": "376:59:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 66,
            "name": "TaskCompleted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "458:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "458:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "467:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "457:25:1"
            },
            "src": "438:45:1"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "508:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436c65616e5f526f6f6d",
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "525:12:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c292a06aa3ff76631e25bdd6a6da06aa5d0ba2dcfcd6d571ecdb5caf9396ffee",
                          "typeString": "literal_string \"Clean_Room\""
                        },
                        "value": "Clean_Room"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c292a06aa3ff76631e25bdd6a6da06aa5d0ba2dcfcd6d571ecdb5caf9396ffee",
                          "typeString": "literal_string \"Clean_Room\""
                        }
                      ],
                      "id": 69,
                      "name": "createTask",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "514:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "514:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "514:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 74,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:2:1"
            },
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:0:1"
            },
            "scope": 132,
            "src": "487:56:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "649:187:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 80,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "681:12:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 79,
                      "name": "taskCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41,
                      "src": "681:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 81,
                  "nodeType": "ExpressionStatement",
                  "src": "681:12:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "699:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                          "typeString": "mapping(uint256 => struct checkList.Task storage ref)"
                        }
                      },
                      "id": 84,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 83,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "705:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "699:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_storage",
                        "typeString": "struct checkList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "723:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 87,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "734:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 88,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "744:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 85,
                        "name": "Task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "718:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Task_$48_storage_ptr_$",
                          "typeString": "type(struct checkList.Task storage pointer)"
                        }
                      },
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "718:32:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_memory",
                        "typeString": "struct checkList.Task memory"
                      }
                    },
                    "src": "699:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$48_storage",
                      "typeString": "struct checkList.Task storage ref"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "699:51:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "804:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "815:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 95,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "825:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 92,
                      "name": "TaskCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "792:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,string memory,bool)"
                      }
                    },
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "792:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 97,
                  "nodeType": "EmitStatement",
                  "src": "787:44:1"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "_content",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "618:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "617:24:1"
            },
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "649:0:1"
            },
            "scope": 132,
            "src": "598:238:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 130,
              "nodeType": "Block",
              "src": "902:400:1",
              "statements": [
                {
                  "assignments": [
                    105
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 105,
                      "name": "_task",
                      "nodeType": "VariableDeclaration",
                      "scope": 130,
                      "src": "1001:17:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                        "typeString": "struct checkList.Task"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 104,
                        "name": "Task",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 48,
                        "src": "1001:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$48_storage_ptr",
                          "typeString": "struct checkList.Task"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 109,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 106,
                      "name": "tasks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "1021:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                        "typeString": "mapping(uint256 => struct checkList.Task storage ref)"
                      }
                    },
                    "id": 108,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 107,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 101,
                      "src": "1027:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1021:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$48_storage",
                      "typeString": "struct checkList.Task storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1001:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 110,
                        "name": "_task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 105,
                        "src": "1123:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                          "typeString": "struct checkList.Task memory"
                        }
                      },
                      "id": 112,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "completed",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47,
                      "src": "1123:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "1141:16:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 105,
                          "src": "1142:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                            "typeString": "struct checkList.Task memory"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47,
                        "src": "1142:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1123:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "1233:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$48_storage_$",
                          "typeString": "mapping(uint256 => struct checkList.Task storage ref)"
                        }
                      },
                      "id": 120,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 101,
                        "src": "1239:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1233:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_storage",
                        "typeString": "struct checkList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 121,
                      "name": "_task",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 105,
                      "src": "1246:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                        "typeString": "struct checkList.Task memory"
                      }
                    },
                    "src": "1233:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$48_storage",
                      "typeString": "struct checkList.Task storage ref"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1233:18:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 125,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 101,
                        "src": "1276:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 126,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 105,
                          "src": "1281:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$48_memory_ptr",
                            "typeString": "struct checkList.Task memory"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47,
                        "src": "1281:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 124,
                      "name": "TaskCompleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "1262:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,bool)"
                      }
                    },
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1262:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 129,
                  "nodeType": "EmitStatement",
                  "src": "1257:40:1"
                }
              ]
            },
            "documentation": null,
            "id": 131,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toggleCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 101,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "885:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 100,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "885:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "884:10:1"
            },
            "returnParameters": {
              "id": 103,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "902:0:1"
            },
            "scope": 132,
            "src": "860:442:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 133,
        "src": "26:1278:1"
      }
    ],
    "src": "0:1305:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "completed",
              "type": "bool"
            }
          ],
          "name": "TaskCompleted",
          "type": "event"
        },
        "0x05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "completed",
              "type": "bool"
            }
          ],
          "name": "TaskCreated",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x0a6B8Bab2f3a3C1fc151364eCeB71C84015C600D",
      "transactionHash": "0x08a03e5955fb7fb3ab2b43ca3c205b3610fc251964a0ceac6899bc16f60d9f45"
    }
  },
  "schemaVersion": "3.2.1",
  "updatedAt": "2020-07-14T17:32:46.040Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
