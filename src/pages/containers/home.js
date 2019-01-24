import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handler-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
    state = {
        modalVisible: false,
    }

    handleOpenModal = () => {
        this.setState({
            modalVisible: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <VideoPlayer autoplay/>
                    <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.modalVisible && 
                        <ModalContainer>
                            <Modal handleCloseClick={this.handleCloseModal}>
                                <p>esto es un modal</p>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home