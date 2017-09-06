import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSS from './additional-filters-input.component.scss';
import CheckedImg from '../../../img/Checked.svg';
import UncheckedImg from '../../../img/Unchecked.svg';

class AdditionalFiltersInput extends React.Component {
    state = {
        showDiv: false, 
        showTopDiv: true,
        checked: true,
        unchecked: false
    }
    render() {
        const { showDiv } = this.state
        const { showTopDiv } = this.state
        const { checked } = this.state
        const { unchecked } = this.state
        if (this.props.type == 'minMax') {
            return (
                <div className={CSS.additionalFiltersInputWrapper}>
                    { showTopDiv && (
                        <div>
                            <img src={UncheckedImg} className={CSS.uncheckedImgTopDiv} onClick={() => this.setState({ showDiv: !showDiv, showTopDiv: !showTopDiv })}/>
                            <input onClick={() => this.setState({ showDiv: !showDiv, showTopDiv: !showTopDiv })} className={CSS.additionalFiltersInput} placeholder={this.props.placeholder}></input>
                        </div>
                    )}
                    { showDiv && (
                        <div className={CSS.appearingDiv}>
                            { checked && (
                                <img src={CheckedImg} className={CSS.checkedImg} onClick={() => this.setState({ checked: !checked, unchecked: !unchecked })} />
                            )}
                            { unchecked && (
                                <img src={UncheckedImg} className={CSS.uncheckedImg} onClick={() => this.setState({ checked: !checked, unchecked: !unchecked })} />
                            )}
                            <p onClick={() => this.setState({ showDiv: !showDiv, showTopDiv: !showTopDiv })} className={CSS.additionalFiltersText}>{this.props.placeholder}</p>
                            <input className={CSS.additionalFiltersSubInput} placeholder="Min"></input>
                            <input className={CSS.additionalFiltersSubInput} placeholder="Max"></input>            
                        </div>
                    )}
                </div>
            );
        } else {
            return (
            <div className={CSS.additionalFiltersInputWrapper}>
                { showTopDiv && (
                    <div>
                        <img src={UncheckedImg} className={CSS.uncheckedImgTopDiv} onClick={() => this.setState({ showDiv: !showDiv, showTopDiv: !showTopDiv })}/>
                        <input onClick={() => this.setState({ showDiv: !showDiv, showTopDiv: !showTopDiv })} className={CSS.additionalFiltersInput} placeholder={this.props.placeholder}></input>
                    </div>
                )}
                { showDiv && (
                    <div className={CSS.appearingDiv}>
                        { checked && (
                            <img src={CheckedImg} className={CSS.checkedImg} onClick={() => this.setState({ checked: !checked, unchecked: !unchecked })} />
                        )}
                        { unchecked && (
                            <img src={UncheckedImg} className={CSS.uncheckedImg} onClick={() => this.setState({ checked: !checked, unchecked: !unchecked })} />
                        )}
                        <p onClick={() => this.setState({ showDiv: !showDiv, showTopDiv: !showTopDiv })} className={CSS.additionalFiltersText}>{this.props.placeholder}</p>
                        <input className={CSS.additionalFiltersFullInput} placeholder={this.props.type}></input>
                    </div>
                )}
            </div>
            );
        }
    }
}

export default AdditionalFiltersInput