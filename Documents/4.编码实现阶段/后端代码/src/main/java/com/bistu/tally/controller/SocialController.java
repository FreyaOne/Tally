package com.bistu.tally.controller;

import java.util.List;
import java.util.Objects;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bistu.tally.bean.ResultInfo;
import com.bistu.tally.helper.Location;
import com.bistu.tally.helper.PraiseBean;
import com.bistu.tally.helper.SocialBean;
import com.bistu.tally.service.SocialService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class SocialController {
	@Autowired
	private SocialService socialService;
	
	/**
	 * Url接受参数，通过socialService检查数据库，获取附近的人的动态
	 * @param la 经度
	 * @param lo 纬度
	 * @return 获取成功返回动态信息
	 */
	@GetMapping({"/socials/v1/{la}&{lo}&{uid}"}) 
	public ResultInfo getAllSocial(@PathVariable("la") double la, @PathVariable("lo") double lo,
			@PathVariable("uid") Long userId) {
		log.info("get requesting...");
		ResultInfo resultInfo = ResultInfo.success();
		List<SocialBean> socials = this.socialService.getByDistance(new Location(la, lo), userId);
		log.info("socials is: {}", socials);
		resultInfo.setData(socials);
		return resultInfo;
	}
	
	/**
	 * Url接受参数，通过socialService检查数据库，获取某个用户的动态
	 * @param authorId 被查看人的id
	 * @param userId 查看人id
	 * @return 获取成功返回动态信息
	 */
	@GetMapping({"/socials/v2/{authorId}&{userId}"})
	public ResultInfo getOneSocial(@PathVariable("userId") long userId, @PathVariable("authorId") Long authorId) {
		log.info("get requesting...");
		ResultInfo resultInfo = ResultInfo.success();
		List<SocialBean> socials = this.socialService.getByUserId(authorId, userId);
		log.info("socials is: {}", socials);
		resultInfo.setData(socials);
		return resultInfo;
	}
	
	/**
	 * Url接受参数，通过socialService保存动态信息在数据库中
	 * @param bean 动态信息，包括发布者id，内容，定位，时间，具体地址
	 * @return 保存成功返回code 0以及动态信息，不成功返回code 1以及错误信息
	 */
	@PostMapping({"/socials"})
	public ResultInfo createSocial(@RequestBody SocialBean bean) {
		log.info("coming bean is: {}", bean);
		if(Objects.isNull(bean) || Objects.isNull(bean.getSocialContent()) ||
				Objects.isNull(bean.getLocation()) || Objects.isNull(bean.getTime())||
				Objects.isNull(bean.getUserId()) || Objects.isNull(bean.getAddress())) {
			ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setMesg(String.format("Attribute missing,Request Social:%s",
                    ReflectionToStringBuilder.toString(bean, ToStringStyle.MULTI_LINE_STYLE)));
            return ResultInfo.failure();
		}
		SocialBean bean2 = this.socialService.create(bean);
		ResultInfo resultInfo = ResultInfo.success();
		resultInfo.setData(bean2);
		return resultInfo;
	}
	/**
	 * Url接受参数，通过socialService修改数据库，删除该条动态
	 * @param sid 动态id
	 * @return 删除成功返回code 0，否则返回code 1
	 */
	@DeleteMapping({"/socials/{sid}"})
	public ResultInfo deleteSocial(@PathVariable("sid") Long id) {
		log.info("ready to delete social id:{}", id);
        if (Objects.isNull(id)) {
            ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setMesg("SID is missing");
            log.error("SID is required,....");
            return resultInfo;
        }

        boolean result = socialService.delete(id);
        if(!result) {
            ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setData("social deleted fail");
            log.error("social:{} deleted fail", id);
            return resultInfo;
        }
        else {
            ResultInfo resultInfo = ResultInfo.success();
            resultInfo.setMesg(id + " is deleted");
            log.info("social:{} is deleted....", id);
            return resultInfo;
        }
	}
	
	/**
	 * Url接受参数，通过socialService修改数据库，点赞某条动态
	 * @param bean 点赞动态信息，包括动态id，操作人id
	 * @return 操作成功返回code 0以及点赞信息，不成功返回code 1
	 */
	@PostMapping({"/praise"})
	public ResultInfo createPraise(@RequestBody PraiseBean bean) {
		log.info("coming bean is: {}", bean);
		if(Objects.isNull(bean) || Objects.isNull(bean.getSocialId()) ||
				Objects.isNull(bean.getUserId())) {
			ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setMesg(String.format("Attribute missing,Request Praise:%s",
                    ReflectionToStringBuilder.toString(bean, ToStringStyle.MULTI_LINE_STYLE)));
            return ResultInfo.failure();
		}
		PraiseBean bean2 = this.socialService.create(bean);
		ResultInfo resultInfo = ResultInfo.success();
		resultInfo.setData(bean2);
		return resultInfo;
	}
	
	/**
	 * Url接受参数，通过socialService修改数据库，取消点赞某条动态
	 * @param bean 点赞动态信息，包括动态id，操作人id
	 * @return 操作成功返回code 0，不成功返回code 1
	 */
	@DeleteMapping({"/praise"})
	public ResultInfo deltePraise(@RequestBody PraiseBean bean) {
		log.info("coming bean is: {}", bean);
		if(Objects.isNull(bean) || Objects.isNull(bean.getSocialId()) ||
				Objects.isNull(bean.getUserId())) {
			ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setMesg(String.format("Attribute missing,Request Praise:%s",
                    ReflectionToStringBuilder.toString(bean, ToStringStyle.MULTI_LINE_STYLE)));
            return ResultInfo.failure();
		}
		boolean result = socialService.delete(bean);
        if(!result) {
            ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setData("social deleted fail");
            log.error("praise:{} deleted fail", bean);
            return resultInfo;
        }
        else {
            ResultInfo resultInfo = ResultInfo.success();
            resultInfo.setMesg("is deleted");
            return resultInfo;
        }
	}
}
