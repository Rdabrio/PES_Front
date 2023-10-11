import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper'; //npm install react-native-paper
import { Keyboard } from 'react-native'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);

    //Para eliminar la aparicion del keyboard TEMPORALMENTE
    /*
    closeKeyboard = () => {
        Keyboard.dismiss();
    };*/

    return (
      <Searchbar
        placeholder="Introduce your search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: 'lightblue',
        }}
        //onFocus={this.closeKeyboard}
      />
    );
  };
  
  export default SearchBar;