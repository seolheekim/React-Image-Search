
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label> Image Search </label>
            <input
              type='text'
              onChange={(event) => this.setState({term: event.target.value}) }
              value= {this.state.term}
            />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;


// import React from 'react';

// class SearchBar extends React.Component {
//   // Initializing the state, and it has a single prop called "term" as an empty
//   // string. Every single time a user types inside the input it will update
//   // the term prop with whatever the current value.
//   state = {
//     term: ''
//   };

//   //this method will get called when user changes the text inside the input.
//   // onInputChange(event) {
//   //   console.log(event.target.value) //<- this will contain the text the user inputs
//   // }

//   onFormSubmit = (event) => {
//     //event.preventDefault() <- this code will keep the browser from submiting the
//     // form automatically and refreshing the page.
//     event.preventDefault() //this is a callback
//     this.props.onSubmit(this.state.term )

//     // console.log(this.state.term)
//   }

//   render() {
//     return (
//       <div className="ui segment">
//         <form
//           onSubmit={this.onFormSubmit}
//           className="ui form"
//         >
//           <div className="field">
//             <label> Image Search </label>
//             <input
//               type='text'
//               onChange={(event) => this.setState({term: event.target.value}) }
//               value= {this.state.term}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

