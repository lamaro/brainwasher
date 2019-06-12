import React from 'react'
import Container from '@material-ui/core/Container'
import NewsGrid from '../components/NewsGrid'
import Loading from '../components/Loading'
import Footer from '../components/Footer'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true,
        }
    }

    async fetchSearchNews(){
        const term = this.props.match.params.slug
          this.setState({
              isLoading:true
          })
        try {
            const response = await fetch(`https://api.canillitapp.com/search/${term}`);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({ 
              news: json, 
              isLoading: false
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchSearchNews()
        }
    }

   componentDidMount(){
        this.fetchSearchNews()
    }

    render(){
    return(
        <div>
            {this.state.isLoading && <Loading />}
            {!this.state.isLoading && <div><Container><NewsGrid news={this.state.news} referido={this.props.match.params.slug} /></Container><Footer /></div>}
        </div>
    )}
}

export default Search