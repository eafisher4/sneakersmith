import * as types from '../constants/actionTypes';


const initialState = {
  user: '',
  imgUrl: '',
  title: '',
  price: 0,
  brand: '',
  size: 0,
  condition: '',
  listings: [],
  categories: [],
  filterBy: '',
  isLoggedin: false,
  formToggleState: false,
  //showPopup: false,
  togglePopupKey: '',
  username: '',
  password: '',
  isLoggedin: '',
  userProfile: {username: '', email: ''},
};

export default function (previousState = initialState, action) {
  let stateCopy;

  switch (action.type) {
    case types.TOGGLE_POPUP: {
      stateCopy = Object.assign({}, previousState);
      const listingsCopy = stateCopy.listings.slice();
      let toggledPost;
      let toggledPostArrayNum;
      for (let i = 0; i < listingsCopy.length; i += 1) {
        if (listingsCopy[i].key === action.payload) {
          console.log('toggle me');
          toggledPost = listingsCopy[i];
          toggledPostArrayNum = i;
          break;
        }
      }
      console.log('toggledPost:', toggledPost);
      toggledPost.showPopup = !toggledPost.showPopup;
      console.log(toggledPost.showPopup);
      listingsCopy[toggledPostArrayNum] = toggledPost;
      stateCopy.listings = listingsCopy;
      return stateCopy;
    }
    
    case types.CREATE_LISTING: {
      stateCopy = Object.assign({}, previousState);
      const { user, imgUrl, key, title, price, condition, brand, size, listings } = previousState;
      
      const newListing = {
        user,
        imgUrl,
        key,
        title,
        price,
        brand,
        size,
        condition,
      };
      const newListings = listings.slice();
      newListings.push(newListing);
      stateCopy.listings = newListings;
      return stateCopy;
    }
    case types.TOGGLE_FORM: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.formToggleState = !stateCopy.formToggleState;
      return stateCopy;
    }

    case types.UPDATE_SELECTED_BRAND: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.brand = action.payload.target.value;
      console.log('brand', action.payload.target.value)
      return stateCopy;
    }
    case types.UPDATE_SELECTED_CONDITION: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.condition = action.payload.target.value;
      console.log('condition', action.payload.target.value)

      return stateCopy;
    }
    case types.UPDATE_SELECTED_SIZE: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.size = action.payload.target.value;
      console.log('size', action.payload.target.value)

      return stateCopy;
    }
    case types.UPDATE_PRICE: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.price = action.payload.target.value;
      console.log('price', action.payload.target.value)

      return stateCopy;
    }
    case types.UPDATE_TITLE: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.title = action.payload.target.value;
      console.log('title', action.payload.target.value)
      return stateCopy;
    }
    case types.HANDLE_UPLOAD_IMAGE: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.imgUrl = action.payload.target.value;
      return stateCopy;
    }
    case types.GET_FILTERS: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.categories = action.payload.target.value;
      return stateCopy;
    }
    case types.FILTER_PRODUCTS: {
      stateCopy = Object.assign({}, previousState);
      // stateCopy.filterBy = action.payload.target.value;
      return stateCopy;
    }
    case types.DISPLAY_LISTING: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.listings = action.payload;
      return stateCopy;
    }
    case types.UPDATE_USERNAME: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.username = action.payload.target.value;
      return stateCopy;
    }
    case types.UPDATE_PASSWORD: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.password = action.payload.target.value;
      return stateCopy;
    }
    case types.LOGIN_SUCCESS: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.isLoggedIn = true;
      stateCopy.userProfile.username = action.payload.username;
      stateCopy.userProfile.email = action.payload.email;
      return stateCopy;
    }
    default:
      return previousState;
  }
}
