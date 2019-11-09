package com.bistu.tally.bean;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder(toBuilder = true)
public class ResultInfo {
	private String code;
	private String mesg;
	private Object data;

	/**
	 * 流式编程方法
	 * 流式API
	 * 
	 * @return
	 */
	public static ResultInfo success() {
	   return ResultInfo.builder().code("0").mesg("ok").build();
   }
	
	public static ResultInfo failure() {
		return ResultInfo.builder().code("-1").mesg("failure").build();
	}
}