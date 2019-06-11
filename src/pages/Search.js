import React from 'react'
import Container from '@material-ui/core/Container'
import NewsGrid from '../components/NewsGrid'
import Loading from '../components/Loading'

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
            <Container>
                {!this.state.isLoading && <NewsGrid news={this.state.news} />}
            </Container>
        </div>
    )}
}

export default Search