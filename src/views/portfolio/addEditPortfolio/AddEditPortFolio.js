import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const AddEditPortFolio = () => {
  return (
    <Fragment>
      {/* {isLoading ? null : ( */}
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Add New Portfolio</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Add Project
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Project Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.first_name}
                              placeholder="Project Name"
                              type="text"
                              name="projectName"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="first_name" /> */}
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Description
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.last_name}
                              placeholder="Description"
                              type="textarea"
                              name="description"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="last_name" /> */}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Skills
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.last_name}
                              placeholder="Skills"
                              type="text"
                              name="skills"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="last_name" /> */}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Media
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.last_name}
                              type="file"
                              name="media"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                              multiple
                            />
                            {/* <Error field="last_name" /> */}
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Additional information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.address}
                              type="checkbox"
                              name="working"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Currently Working here
                            </label>
                            {/* <Error field="address" /> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Start Date
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.city}
                              type="date"
                              name="startDate"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="city" /> */}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              End Date
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.pincode}
                              placeholder="Postal code"
                              type="date"
                              name="endDate"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="pincode" /> */}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-state"
                            >
                              State
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.state}
                              placeholder="State"
                              type="text"
                              name="state"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="state" /> */}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={values.country}
                              placeholder="Country"
                              type="text"
                              name="country"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="country" /> */}
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          // defaultValue={values.aboutme}
                          type="textarea"
                          name="aboutme"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        {/* <Error field="aboutme" /> */}
                      </FormGroup>
                    </div>
                    <Row className="text-center">
                      <Col>
                        {/* {profileFlag ? (
                          <Button
                            color="default"
                            //   onClick={handleSubmit}
                            size="xm"
                          >
                            UPDATE
                          </Button>
                        ) : (
                          <Button
                            className="mr-4"
                            color="info"
                            //   onClick={handleSubmit}
                            size="xm"
                          >
                            POST
                          </Button>
                        )} */}

                        <Button
                          className="mr-4"
                          color="info"
                          //   onClick={handleSubmit}
                          size="xm"
                        >
                          POST
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
      {/* )} */}
    </Fragment>
  );
};

export default AddEditPortFolio;
