import React from 'react'
import StudentLayout from '../../layout/StudentLayout';

function Stu_energy_assignment(props) {
    return (
		<StudentLayout{...props}> 
        <div>
     <div class="pcoded-main-container hidesidebar">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">

                    <div class="main-body">
                        <div class="page-wrapper">
{/*                             <!-- [ Main Content ] start --> */} 
                           <div class="row">
            
                                <div class="col-sm-12">
                                    <div class="card">
										<div class="row" style={{"border-bottom": "1px solid #f1f1f1"}}>
											<div class="col-7">
												<div class="card-header" style={{"border-bottom": "none"}}>
													<h5>Use Of Energy Assessment</h5>
												</div>
											</div>
											<div class="col-5">
												<div class="headrytbtn">
													<a href="dashboard"><button type="button" class="btn btn-success">Back to Dashboard</button></a>
												</div>
											</div>
										</div>
                                       <form  name="myForm">
                                        <div class="card-block">
											
										  <div class="card">
											<div class="card-header">
											<h5>Question 1</h5>
											</div>
											<div class="card-block">
												<div class="popuptxt">
													<h6>A flashlight produces light energy by using which one of the following types of energy from batteries?</h6>
													<div class="smallimgs"><img src="images/torch.png"/></div>
													<div class="assoptiondiv">
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="radio-p-1" id="radio-p-1"/>
																<label for="radio-p-1" class="cr">A. Electrical</label>
															</div>
															
														</div>
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="radio-p-1" id="radio-p-2"/>
																<label for="radio-p-2" class="cr">B. Solar</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="radio-p-1" id="radio-p-3"/>
																<label for="radio-p-3" class="cr">C. Nuclear</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="radio-p-1" id="radio-p-4"/>
																<label for="radio-p-4" class="cr">D. Sound</label>
															</div>
														</div>
													</div>
													
												</div>
											</div>
										</div>
										
										<div class="card">
											<div class="card-header">
											<h5>Question 2</h5>
											</div>
											<div class="card-block">
												<div class="popuptxt">
													<h6>An object produces sound because it –</h6>
													<div class="assoptiondiv">
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="bradio-p-1" id="bradio-p-1"/>
																<label for="bradio-p-1" class="cr">A. reflects light from the Sun</label>
															</div>
															
														</div>
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="bradio-p-1" id="bradio-p-2"/>
																<label for="bradio-p-2" class="cr">B. generates electrical energy</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="bradio-p-1" id="bradio-p-3"/>
																<label for="bradio-p-3" class="cr">C. absorbs heat from water</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="bradio-p-1" id="bradio-p-4"/>
																<label for="bradio-p-4" class="cr">D. causes air to vibrate</label>
															</div>
														</div>
													</div>
													
												</div>
											</div>
										</div>
										<div class="card">
											<div class="card-header">
											<h5>Question 3</h5>
											</div>
											<div class="card-block">
												<div class="popuptxt">
													<h6>What type of energy is used in an oven to bake a cake?</h6>
													<div class="assoptiondiv">
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="cradio-p-1" id="cradio-p-1"/>
																<label for="cradio-p-1" class="cr">A. Mechanical Energy</label>
															</div>
															
														</div>
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="cradio-p-1" id="cradio-p-2"/>
																<label for="cradio-p-2" class="cr">B. Sound Energy</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="cradio-p-1" id="cradio-p-3"/>
																<label for="cradio-p-3" class="cr">C. Thermal Energy</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="cradio-p-1" id="cradio-p-4"/>
																<label for="cradio-p-4" class="cr">D. Light Energy</label>
															</div>
														</div>
													</div>
													
												</div>
											</div>
										</div>
										
										<div class="card lessoncard">
											<div class="card-header">
											<h5>Question 4</h5>
											</div>
											<div class="card-block">
												<div class="popuptxt">
													<h6>This boy is using a bow and arrow. What form of energy does a bow and arrow demonstrate?</h6>
													<div class="smallimgs"><img src="images/boy.jpg"/></div>
													<div class="assoptiondiv">
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="dradio-p-1" id="dradio-p-1"/>
																<label for="dradio-p-1" class="cr">A. Electrical Energy</label>
															</div>
															
														</div>
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="dradio-p-1" id="dradio-p-2"/>
																<label for="dradio-p-2" class="cr">B. Mechanical Energy</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="dradio-p-1" id="dradio-p-3"/>
																<label for="dradio-p-3" class="cr">C. Sound Energy</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="dradio-p-1" id="dradio-p-4"/>
																<label for="dradio-p-4" class="cr">D. Thermal Energy</label>
															</div>
														</div>
													</div>
													
												</div>
											</div>
										</div>

										<div class="card lessoncard">
											<div class="card-header">
											<h5>Question 5</h5>
											</div>
											<div class="card-block">
												<div class="popuptxt">
													<h6>All of the following objects are used to produce thermal or light energy EXCEPT –</h6>
													<div class="assoptiondiv">
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="eradio-p-1" id="eradio-p-1"/>
																<label for="eradio-p-1" class="cr">A. Lamps</label>
															</div>
															
														</div>
														<div class="form-group">
															<div class="radio radio-primary d-inline">
																<input type="radio" name="eradio-p-1" id="eradio-p-2"/>
																<label for="eradio-p-2" class="cr">B. Ovens</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="eradio-p-1" id="eradio-p-3"/>
																<label for="eradio-p-3" class="cr">C. Candles</label>
															</div>
															
														</div>
														<div class="form-group">
															
															<div class="radio radio-primary d-inline">
																<input type="radio" name="eradio-p-1" id="eradio-p-4"/>
																<label for="eradio-p-4" class="cr">D. Bicycles</label>
															</div>
														</div>
													</div>
													<div class="subbtn text-right">
														<input type="submit" value="Submit" class="btn btn-primary" name="assignsub"/>
													</div>
													<div id="successmsg" class="alert alert-success m-t-20" style={{display:"none"}}>Assessment Completed.</div>
													
												</div>
											</div>
										</div>
											
                                        </div>
										</form>
                                    </div>
                                </div>
                            </div>
                {/*  <!-- [ Main Content ] end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- [ Main Content ] end --> */}</div>
            
			</StudentLayout>
    )
}

export default Stu_energy_assignment
