pragma solidity ^0.4.3;




contract Telecom {
    struct Operator {
        bytes32 name;
         address addr;
        //bytes32 usertype;
        uint bandwidth; 
    
    }
    struct SP{
         bytes32 name;
         address addr;
        //bytes32 usertype;
        uint bandwidth; 
    }
    
    mapping (address => Operator) operator_list;
    mapping (address => SP) sp_list;
    mapping (address=> SP[]) linkop;
    function register_Operator(bytes32 name, address addr, uint bandwidth){
        operator_list[addr] = Operator(name,addr,bandwidth);
    }
    
    function register_sp(bytes32 name, address addr, uint bandwidth){
        sp_list[addr] = SP(name,addr,bandwidth);
    }
    
    function lease(address op,  address sp, uint bandwidth){
           operator_list[op].bandwidth = operator_list[op].bandwidth +bandwidth;    
           var spstruct = sp_list[sp];
           linkop[op].push(SP(spstruct.name,sp,bandwidth)); // 
    }
    
    function invoice(address op, address sp, uint bandwidthSell)  {
        operator_list[op].bandwidth = operator_list[op].bandwidth -bandwidthSell;
        for(uint i=0; i<linkop[op].length;i++){
            if (linkop[op][i].addr == sp){
                linkop[op][i].bandwidth = linkop[op][i].bandwidth - bandwidthSell;
            }
        }
        
    }
  
        

} 
