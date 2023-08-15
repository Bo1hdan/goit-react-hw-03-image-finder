import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { searchImages } from 'LoadImages';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    keyWord: '',
    page: 1,
    isShowModal: false,
    modalImage: '',
  };

  handleSearch = async query => {
    this.setState({ isLoading: true });

    try {
      const images = await searchImages(query, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.searchWord.value.trim().toLowerCase();
    if (!query.length) {
      alert('Please, write a search word');
      return;
    }
    this.setState({
      keyWord: query,
      images: [],
      page: 1,
    });
    this.handleSearch(query);
    e.target.reset();
  };

  showModal = url => {
    this.setState({ isShowModal: true });
    this.setState({ modalImage: url });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { images, isLoading, isShowModal, modalImage } = this.state;

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }

    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} showModal={this.showModal} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleSearch} />}
        {isShowModal && (
          <Modal image={modalImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
