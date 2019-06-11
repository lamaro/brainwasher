import React from 'react'
import Container from '@material-ui/core/Container'
import NewsGrid from '../components/NewsGrid'
import Loading from '../components/Loading'

class Category extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }

    async fetchCategoryNews(){
        const { slug } = this.props.match.params
        const categoriesId = {
            politica: '1',
            internacionales: '2',
            tecnologia: '3',
            espectaculos: '4',
            deportes: '5',
          }
          this.setState({
              isLoading:true
          })
        try {
            const response = await fetch(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
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
          this.fetchCategoryNews()
        }
    }

   componentDidMount(){
        this.fetchCategoryNews()
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

export default Category