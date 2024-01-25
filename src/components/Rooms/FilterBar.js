import React from 'react';
import { Form, FormGroup, FormLabel, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const FilterBar = ({ dateFrom, setDateFrom, dateTo, setDateTo, roomSize, setRoomSize, makeApiCall }) => {
    

    const handleDateFromChange = (selectedDate) => {
        if (selectedDate <= dateTo) {
            setDateFrom(selectedDate);
        }
    };

    const handleDateToChange = (selectedDate) => {
        if (selectedDate >= dateFrom) {
            setDateTo(selectedDate);
        }
    };

    const handleRoomSizeChange = (event) => {
        setRoomSize(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        makeApiCall();
    };

    return (
        <div style={{ padding: '10px', margin: '10px' }}>
            <div className='row'>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Row className="align-items-end">
                        <Col>
                            <FormGroup>
                                <FormLabel htmlFor="dateFrom" className="grey-label">Date From:</FormLabel>
                                <DatePicker
                                    id="dateFrom"
                                    selected={dateFrom ? new Date(dateFrom) : null}
                                    onChange={handleDateFromChange}
                                    minDate={new Date()}
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <FormLabel htmlFor="dateTo" className="grey-label">Date To:</FormLabel>
                                <DatePicker
                                    id="dateTo"
                                    selected={dateTo ? new Date(dateTo) : null}
                                    onChange={handleDateToChange}
                                    minDate={new Date(dateFrom)}
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <FormLabel htmlFor="roomSize" className="grey-label">Room Size:</FormLabel>
                                <Select
                                    id="roomSize"
                                    value={roomSize}
                                    onChange={handleRoomSizeChange}
                                    className='custom-select'
                                    size='small'
                                >
                                    <MenuItem value="0">Any</MenuItem>
                                    <MenuItem value="1">Small (1 person)</MenuItem>
                                    <MenuItem value="2">Medium (2 people)</MenuItem>
                                    <MenuItem value="3">Large (3 or more people)</MenuItem>
                                </Select>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Button variant="success" type="submit" style={{ width: '80%', fontSize: '1.2rem'}}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default FilterBar;