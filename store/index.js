import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialState ={
     selectedItems:{items:[],restaurantName:''}
     
}

const cartSlice=    createSlice({
     name:'Cart',
     initialState:initialState,
     reducers:{
          addtoCart(state,action){         
               if(action.payload.checkboxValue){
                    console.log('add');
                    state.selectedItems.items.push(action.payload);
                    state.selectedItems.restaurantName=action.payload.restaurantName
     
               }  
               else {
                    console.log('remove');
                  state.selectedItems.items = state.selectedItems.items.filter((item)=> item.title !== action.payload.title)
     

               }    
              
          }
          
          }
          
     }
)

const store = configureStore({
     reducer:cartSlice.reducer
});
export const cartActions = cartSlice.actions;
export default store;