import React,{Component} from 'react';

class GoogleAutocomplete extends Component{
    constructor(){
        super();
        this.onSelect=this.onSelect.bind(this);
        this.getLocation=this.getLocation.bind(this);
        this.clearLocation=this.clearLocation.bind(this);
    }
    componentDidMount(){
        const google=window.google;
         this.autocomplete = new google.maps.places.Autocomplete(this.refs.location);
         this.autocomplete.addListener('place_changed',this.onSelect);
    }
    onSelect(){
        if(this.props.onPlaceSelected){
            this.props.onPlaceSelected(this.autocomplete.getPlace());
        }
    }
    getLocation(){
        return this.refs.location.value;
    }
    clearLocation(){
        return this.refs.location.value='';
    }
    render(){
        return(
            <div className="form-group">
            <input type="search" 
            placeholder="enter the city name" 
            ref="location"/>
            </div>
        )
    }
} 

export default GoogleAutocomplete;