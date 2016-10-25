<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/resources/css/map.css"/>
<script type="text/javascript" src="/resources/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA19l1lXb7Knj6sgwTXGwnKSqfakx3laYE&libraries=places&sensor=false"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
<script type="text/javascript" src="/resources/js/map.js"></script>
</head>
<body>
	<div id="select">
		<label>영상</label>
		<input type="radio" name="mapview" value="1">
		<label>파일럿 정보</label>
		<input type="radio" name="mapview" value="2">
	</div>
	<div id="map_canvas"></div>
</body>
</html>