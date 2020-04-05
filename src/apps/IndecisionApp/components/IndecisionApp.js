import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import Menu from '../../../components/Globals/Header';
import '../../../styles/IndecisionApp/IndecisionAppStyles.scss';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
        showModal: false
    }
    clearSelectedOptionState = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option,
            showModal: true
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Not a valid entry';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    render() {
        const subTitle = 'Put your life in the hands of a computer';
        // Modal.setAppElement('#app')

        return (
            <div className='indecisionapp'>
                <Menu />
                <Header subTitle={subTitle} />
                <div className='indecision-container'>
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOptionState={this.clearSelectedOptionState}
                    showModal={this.state.showModal}
                />
            </div>
        )
    };
};

export default IndecisionApp;