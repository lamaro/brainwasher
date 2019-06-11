import React from 'react'
import Container from '@material-ui/core/Container'
import NewsGrid from '../components/NewsGrid'
import Loading from '../components/Loading'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }

    async componentDidMount(){
        const date = dayjs()
        const dateFormatted = date.format('YYYY[-]MM[-]DD')
        try {
            const response = await fetch(`https://api.canillitapp.com/latest/${dateFormatted}`);
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

export default Home