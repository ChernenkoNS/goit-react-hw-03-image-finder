import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchValue: '',
    page: '',
    data: [],
    showModal: false,
    selectedImage: null,
    total: 0,
    loading: false,
  };

 

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchValue;
    const nextSearch = this.state.searchValue;

    if (prevSearch !== nextSearch || this.state.page !== prevState.page) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?key=36761319-d149b7033a361911a7c88355b&q=${nextSearch}&image_type=photo&per_page=12&page=${this.state.page}&orientation=horizontal&safesearch=true`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          // this.setState({
          //   data: [...prevData, ...data.hits],
          //   total: data.total,
          // });
          this.setState(prevState => {
            return {
              data: [...prevState.data, ...data.hits],
              total: data.total,
            };
          });
        })

        .finally(() => this.setState({ loading: false }))

        .catch(error => {
          console.log('error');
        });
    }
  }

  handleButtoChange = page => {
    this.setState({ page: this.state.page + 1 });
  };

  closeModal = showModal => {
    this.setState({ showModal: false });
  };

  openModal = src => {
    this.setState({
      showModal: true,
      selectedImage: src,
    });
  };

  handleValueSubmit = searchValue => {
    this.setState({ searchValue, data: [], page: 1 });
  };

  render() {
    return (
      <>
        <Searchbar 
          onSubmit={this.handleValueSubmit} 
        />
        <ImageGallery 
          data={this.state.data} 
          openModal={this.openModal} 
        />

        {this.state.loading && 
          <Loader />
        }

        {this.state.data.length !== 0 &&
          this.state.total > this.state.data.length && (
            <Button 
              onClick={this.handleButtoChange} 
            />
        )}
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            selectedImage={this.state.selectedImage}
          />
        )}
      </>
    );
  }
}
