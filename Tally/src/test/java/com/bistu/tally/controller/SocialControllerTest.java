package com.bistu.tally.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.alibaba.fastjson.JSON;
import com.bistu.tally.TestApplication;
import com.bistu.tally.helper.Location;
import com.bistu.tally.helper.PraiseBean;
import com.bistu.tally.helper.SocialBean;
import com.bistu.tally.service.SocialService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK,classes = TestApplication.class)
@AutoConfigureMockMvc
public class SocialControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private SocialService socialService;
	
	@Test
	@DisplayName("测试SocialController的POST方法")
	public void testPost1() throws Exception {
		SocialBean bean = new SocialBean();
		bean.setUserId((long) 1);
		bean.setLocation(new Location(11.0334, 11.47242));
//		bean.setSocialContent("a test");
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd HH:mm:ss");
		String strDate= sdf.format(date ); 
		date =sdf.parse(strDate); 
		bean.setTime(date);
		
		MvcResult mvcResult = mockMvc.perform(
				post("/socials")
				.contentType(MediaType.APPLICATION_JSON)
				.content(JSON.toJSONString(bean))).andReturn();
		System.out.println(mvcResult.getResponse().getContentAsString());
		
	}
	
	@Test
	@DisplayName("测试SocialController的POST方法")
	public void testPost2() throws Exception {
		PraiseBean bean = new PraiseBean();
//		bean.setSocialId((long) 1);
		bean.setUserId((long) 1);
		
		MvcResult mvcResult = mockMvc.perform(
				post("/socials")
				.contentType(MediaType.APPLICATION_JSON)
				.content(JSON.toJSONString(bean))).andReturn();
		System.out.println(mvcResult.getResponse().getContentAsString());
		
	}
	
	@Test
	@DisplayName("测试SocialController的get1方法")
	public void testGet1() throws Exception {
		MvcResult mvcResult = mockMvc.perform(
				get("/social/v1/").accept(MediaType.APPLICATION_JSON_UTF8)).andReturn();
		System.out.println(mvcResult.getResponse().getContentAsString());
		
	}
	
	@Test
	@DisplayName("测试SocialController的get1方法")
	public void testGet2() throws Exception {
		MvcResult mvcResult = mockMvc.perform(
				get("/social/v2/").accept(MediaType.APPLICATION_JSON_UTF8)).andReturn();
		System.out.println(mvcResult.getResponse().getContentAsString());
		
	}
	
	@Test
	@DisplayName("测试SocialController的delete方法")
	public void testDetele1() throws Exception {
		MvcResult mvcResult = mockMvc.perform(
				delete("/socials").accept(MediaType.APPLICATION_JSON)).andReturn();
		System.out.println(mvcResult.getResponse().getContentAsString());
		
	}
	
	@Test
	@DisplayName("测试SocialController的delete方法")
	public void testDetele2() throws Exception {
		PraiseBean bean = new PraiseBean();
		bean.setSocialId((long) 1);
//		bean.setUserId((long) 1);
		
		MvcResult mvcResult = mockMvc.perform(
				delete("/praise").contentType(MediaType.APPLICATION_JSON_UTF8)).andReturn();
		System.out.println(mvcResult.getResponse().getContentAsString());
		
		
	}
}
