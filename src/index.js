import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';
import CitiesDisplay from './Components/CitiesDisplay';

const appID = 'e6432b3e4048fffaddcfccd1781505f5';
let cityData = [];
let currentWeatherData = {
  "coord": {
      "lon": -122.4199,
      "lat": 37.779
  },
  "weather": [
      {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 44.83,
      "feels_like": 40.44,
      "temp_min": 39.02,
      "temp_max": 48.31,
      "pressure": 1018,
      "humidity": 77
  },
  "visibility": 10000,
  "wind": {
      "speed": 8.05,
      "deg": 90
  },
  "clouds": {
      "all": 75
  },
  "dt": 1670045846,
  "sys": {
      "type": 2,
      "id": 2017837,
      "country": "US",
      "sunrise": 1669993655,
      "sunset": 1670028668
  },
  "timezone": -28800,
  "id": 5391959,
  "name": "San Francisco",
  "cod": 200
}
let forecastedWeatherData = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1670047200,
          "main": {
              "temp": 44.83,
              "feels_like": 40.6,
              "temp_min": 44.83,
              "temp_max": 46.89,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1017,
              "humidity": 77,
              "temp_kf": -1.14
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 75
          },
          "wind": {
              "speed": 7.72,
              "deg": 54,
              "gust": 8.86
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-03 06:00:00"
      },
      {
          "dt": 1670058000,
          "main": {
              "temp": 45.36,
              "feels_like": 41.43,
              "temp_min": 45.36,
              "temp_max": 46.38,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 73,
              "temp_kf": -0.57
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 81
          },
          "wind": {
              "speed": 7.34,
              "deg": 55,
              "gust": 8.97
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-03 09:00:00"
      },
      {
          "dt": 1670068800,
          "main": {
              "temp": 45.93,
              "feels_like": 42.03,
              "temp_min": 45.93,
              "temp_max": 46.47,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 70,
              "temp_kf": -0.3
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 89
          },
          "wind": {
              "speed": 7.52,
              "deg": 36,
              "gust": 8.34
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-03 12:00:00"
      },
      {
          "dt": 1670079600,
          "main": {
              "temp": 44.76,
              "feels_like": 39.81,
              "temp_min": 44.76,
              "temp_max": 44.76,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 9.31,
              "deg": 30,
              "gust": 10.13
          },
          "visibility": 10000,
          "pop": 0.49,
          "rain": {
              "3h": 0.89
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-03 15:00:00"
      },
      {
          "dt": 1670090400,
          "main": {
              "temp": 44.4,
              "feels_like": 39.88,
              "temp_min": 44.4,
              "temp_max": 44.4,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 8.12,
              "deg": 49,
              "gust": 8.9
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 2.29
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-03 18:00:00"
      },
      {
          "dt": 1670101200,
          "main": {
              "temp": 45.14,
              "feels_like": 42.1,
              "temp_min": 45.14,
              "temp_max": 45.14,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1012,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.64,
              "deg": 21,
              "gust": 5.21
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 2.69
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-03 21:00:00"
      },
      {
          "dt": 1670112000,
          "main": {
              "temp": 46,
              "feels_like": 46,
              "temp_min": 46,
              "temp_max": 46,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.41,
              "deg": 43,
              "gust": 2.33
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 1.79
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-04 00:00:00"
      },
      {
          "dt": 1670122800,
          "main": {
              "temp": 48.83,
              "feels_like": 46.72,
              "temp_min": 48.83,
              "temp_max": 48.83,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 85
          },
          "wind": {
              "speed": 5.19,
              "deg": 215,
              "gust": 8.9
          },
          "visibility": 10000,
          "pop": 0.03,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 03:00:00"
      },
      {
          "dt": 1670133600,
          "main": {
              "temp": 48.79,
              "feels_like": 44.89,
              "temp_min": 48.79,
              "temp_max": 48.79,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 58
          },
          "wind": {
              "speed": 9.06,
              "deg": 169,
              "gust": 14.43
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 06:00:00"
      },
      {
          "dt": 1670144400,
          "main": {
              "temp": 48.96,
              "feels_like": 44.19,
              "temp_min": 48.96,
              "temp_max": 48.96,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 30
          },
          "wind": {
              "speed": 11.74,
              "deg": 158,
              "gust": 22.06
          },
          "visibility": 10000,
          "pop": 0.28,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 09:00:00"
      },
      {
          "dt": 1670155200,
          "main": {
              "temp": 50.97,
              "feels_like": 49.62,
              "temp_min": 50.97,
              "temp_max": 50.97,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 59
          },
          "wind": {
              "speed": 14.25,
              "deg": 180,
              "gust": 22.86
          },
          "visibility": 10000,
          "pop": 0.47,
          "rain": {
              "3h": 0.35
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 12:00:00"
      },
      {
          "dt": 1670166000,
          "main": {
              "temp": 50.29,
              "feels_like": 49.1,
              "temp_min": 50.29,
              "temp_max": 50.29,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 82
          },
          "wind": {
              "speed": 10.2,
              "deg": 159,
              "gust": 16.35
          },
          "visibility": 10000,
          "pop": 0.58,
          "rain": {
              "3h": 0.71
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 15:00:00"
      },
      {
          "dt": 1670176800,
          "main": {
              "temp": 52.02,
              "feels_like": 50.81,
              "temp_min": 52.02,
              "temp_max": 52.02,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1018,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 89
          },
          "wind": {
              "speed": 9.93,
              "deg": 158,
              "gust": 14.2
          },
          "visibility": 10000,
          "pop": 0.83,
          "rain": {
              "3h": 1.23
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-04 18:00:00"
      },
      {
          "dt": 1670187600,
          "main": {
              "temp": 55.4,
              "feels_like": 54.07,
              "temp_min": 55.4,
              "temp_max": 55.4,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 97
          },
          "wind": {
              "speed": 10.18,
              "deg": 190,
              "gust": 13.56
          },
          "visibility": 10000,
          "pop": 0.82,
          "rain": {
              "3h": 0.73
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-04 21:00:00"
      },
      {
          "dt": 1670198400,
          "main": {
              "temp": 54.73,
              "feels_like": 53.44,
              "temp_min": 54.73,
              "temp_max": 54.73,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 84
          },
          "wind": {
              "speed": 8.37,
              "deg": 210,
              "gust": 11.99
          },
          "visibility": 10000,
          "pop": 0.79,
          "rain": {
              "3h": 0.54
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 00:00:00"
      },
      {
          "dt": 1670209200,
          "main": {
              "temp": 53.01,
              "feels_like": 51.82,
              "temp_min": 53.01,
              "temp_max": 53.01,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.23,
              "deg": 196,
              "gust": 8.81
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 03:00:00"
      },
      {
          "dt": 1670220000,
          "main": {
              "temp": 52.41,
              "feels_like": 51.26,
              "temp_min": 52.41,
              "temp_max": 52.41,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 6.11,
              "deg": 190,
              "gust": 9.8
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 06:00:00"
      },
      {
          "dt": 1670230800,
          "main": {
              "temp": 51.96,
              "feels_like": 50.76,
              "temp_min": 51.96,
              "temp_max": 51.96,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 6.22,
              "deg": 182,
              "gust": 9.31
          },
          "visibility": 10000,
          "pop": 0.46,
          "rain": {
              "3h": 0.3
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 09:00:00"
      },
      {
          "dt": 1670241600,
          "main": {
              "temp": 51.69,
              "feels_like": 50.41,
              "temp_min": 51.69,
              "temp_max": 51.69,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 4.92,
              "deg": 188,
              "gust": 8.05
          },
          "visibility": 10000,
          "pop": 0.53,
          "rain": {
              "3h": 1.01
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 12:00:00"
      },
      {
          "dt": 1670252400,
          "main": {
              "temp": 50.95,
              "feels_like": 49.66,
              "temp_min": 50.95,
              "temp_max": 50.95,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 54
          },
          "wind": {
              "speed": 5.5,
              "deg": 164,
              "gust": 7.18
          },
          "visibility": 10000,
          "pop": 0.47,
          "rain": {
              "3h": 0.68
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 15:00:00"
      },
      {
          "dt": 1670263200,
          "main": {
              "temp": 53.98,
              "feels_like": 52.56,
              "temp_min": 53.98,
              "temp_max": 53.98,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 6.6,
              "deg": 183,
              "gust": 9.69
          },
          "visibility": 10000,
          "pop": 0.12,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 18:00:00"
      },
      {
          "dt": 1670274000,
          "main": {
              "temp": 55.29,
              "feels_like": 53.82,
              "temp_min": 55.29,
              "temp_max": 55.29,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 9.24,
              "deg": 226,
              "gust": 11.61
          },
          "visibility": 10000,
          "pop": 0.14,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 21:00:00"
      },
      {
          "dt": 1670284800,
          "main": {
              "temp": 53.94,
              "feels_like": 52.41,
              "temp_min": 53.94,
              "temp_max": 53.94,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 7.92,
              "deg": 237,
              "gust": 10.49
          },
          "visibility": 10000,
          "pop": 0.08,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 00:00:00"
      },
      {
          "dt": 1670295600,
          "main": {
              "temp": 51.8,
              "feels_like": 50.54,
              "temp_min": 51.8,
              "temp_max": 51.8,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 5
          },
          "wind": {
              "speed": 5.57,
              "deg": 224,
              "gust": 8.23
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 03:00:00"
      },
      {
          "dt": 1670306400,
          "main": {
              "temp": 50.63,
              "feels_like": 49.33,
              "temp_min": 50.63,
              "temp_max": 50.63,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 7
          },
          "wind": {
              "speed": 3.36,
              "deg": 233,
              "gust": 4.34
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.1
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 06:00:00"
      },
      {
          "dt": 1670317200,
          "main": {
              "temp": 49.59,
              "feels_like": 49.59,
              "temp_min": 49.59,
              "temp_max": 49.59,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 24
          },
          "wind": {
              "speed": 1.5,
              "deg": 174,
              "gust": 2.26
          },
          "visibility": 10000,
          "pop": 0.3,
          "rain": {
              "3h": 0.23
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 09:00:00"
      },
      {
          "dt": 1670328000,
          "main": {
              "temp": 49.1,
              "feels_like": 47.59,
              "temp_min": 49.1,
              "temp_max": 49.1,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1012,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 60
          },
          "wind": {
              "speed": 4.34,
              "deg": 55,
              "gust": 5.21
          },
          "visibility": 10000,
          "pop": 0.57,
          "rain": {
              "3h": 1.43
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 12:00:00"
      },
      {
          "dt": 1670338800,
          "main": {
              "temp": 48.2,
              "feels_like": 44.33,
              "temp_min": 48.2,
              "temp_max": 48.2,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 8.59,
              "deg": 57,
              "gust": 11.21
          },
          "visibility": 10000,
          "pop": 0.62,
          "rain": {
              "3h": 0.79
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 15:00:00"
      },
      {
          "dt": 1670349600,
          "main": {
              "temp": 48.9,
              "feels_like": 45.14,
              "temp_min": 48.9,
              "temp_max": 48.9,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 8.72,
              "deg": 52,
              "gust": 11.59
          },
          "visibility": 10000,
          "pop": 0.47,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 18:00:00"
      },
      {
          "dt": 1670360400,
          "main": {
              "temp": 50.86,
              "feels_like": 48.99,
              "temp_min": 50.86,
              "temp_max": 50.86,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.11,
              "deg": 36,
              "gust": 8.21
          },
          "visibility": 10000,
          "pop": 0.06,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 21:00:00"
      },
      {
          "dt": 1670371200,
          "main": {
              "temp": 51.82,
              "feels_like": 49.86,
              "temp_min": 51.82,
              "temp_max": 51.82,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 79
          },
          "wind": {
              "speed": 5.1,
              "deg": 348,
              "gust": 7.63
          },
          "visibility": 10000,
          "pop": 0.06,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 00:00:00"
      },
      {
          "dt": 1670382000,
          "main": {
              "temp": 50.81,
              "feels_like": 49.12,
              "temp_min": 50.81,
              "temp_max": 50.81,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1013,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 44
          },
          "wind": {
              "speed": 5.01,
              "deg": 305,
              "gust": 6.46
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 03:00:00"
      },
      {
          "dt": 1670392800,
          "main": {
              "temp": 48.96,
              "feels_like": 46.27,
              "temp_min": 48.96,
              "temp_max": 48.96,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 26
          },
          "wind": {
              "speed": 6.29,
              "deg": 312,
              "gust": 7.72
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 06:00:00"
      },
      {
          "dt": 1670403600,
          "main": {
              "temp": 48.18,
              "feels_like": 47.26,
              "temp_min": 48.18,
              "temp_max": 48.18,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.4,
              "deg": 317,
              "gust": 4.07
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 09:00:00"
      },
      {
          "dt": 1670414400,
          "main": {
              "temp": 47.52,
              "feels_like": 47.52,
              "temp_min": 47.52,
              "temp_max": 47.52,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 0.58,
              "deg": 92,
              "gust": 1.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 12:00:00"
      },
      {
          "dt": 1670425200,
          "main": {
              "temp": 47.05,
              "feels_like": 47.05,
              "temp_min": 47.05,
              "temp_max": 47.05,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.86,
              "deg": 139,
              "gust": 2.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 15:00:00"
      },
      {
          "dt": 1670436000,
          "main": {
              "temp": 49.77,
              "feels_like": 48.92,
              "temp_min": 49.77,
              "temp_max": 49.77,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1018,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.58,
              "deg": 159,
              "gust": 4.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 18:00:00"
      },
      {
          "dt": 1670446800,
          "main": {
              "temp": 51.78,
              "feels_like": 49.86,
              "temp_min": 51.78,
              "temp_max": 51.78,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 5.53,
              "deg": 246,
              "gust": 5.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 21:00:00"
      },
      {
          "dt": 1670457600,
          "main": {
              "temp": 50.54,
              "feels_like": 48.58,
              "temp_min": 50.54,
              "temp_max": 50.54,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.93,
              "deg": 245,
              "gust": 6.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-08 00:00:00"
      },
      {
          "dt": 1670468400,
          "main": {
              "temp": 48.67,
              "feels_like": 47.79,
              "temp_min": 48.67,
              "temp_max": 48.67,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1019,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.42,
              "deg": 244,
              "gust": 4.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-08 03:00:00"
      }
  ],
  "city": {
      "id": 5391959,
      "name": "San Francisco",
      "coord": {
          "lat": 37.779,
          "lon": -122.4199
      },
      "country": "US",
      "population": 805235,
      "timezone": -28800,
      "sunrise": 1669993655,
      "sunset": 1670028668
  }
}

//*View
const Display = (() => {
  let _activeDisplay;
  let _displayToRemove;
  const _El = {
    body: document.body,
    viewContainer: document.createElement('div'),
    slideContainer: document.createElement('div'),
  }
  const _searchView = Search({
      getWeatherDataByCityName,
      getWeatherDataByLatitudeAndLongitude,
      root: _El.slideContainer,
  });
  const _citiesView = CitiesDisplay({
    showSearchView,
    root: _El.slideContainer, getWeatherDataByLatitudeAndLongitude,
  });
  const _weatherView = WeatherDisplay({
    root: _El.slideContainer,
  })
  _init();
  _searchView.append()
  _activeDisplay = _searchView;
  // _weatherView.append();
  // _weatherView.update(weatherData)

  _El.slideContainer.addEventListener('animationend', _handleAnimationend_slideContainer);
  function _init(){
    classes.add(_El.body, classes.body);
    classes.add(_El.viewContainer, classes.viewContainer);
    classes.add(_El.slideContainer, classes.slideContainer);
    _El.viewContainer.append(_El.slideContainer);
    _El.body.append(_El.viewContainer);
  }
  function _handleAnimationend_slideContainer(event){
    const {animationName} = event;
    if(animationName === 'slideLeft'){
      classes.remove(this, classes.animations.slideLeft);
      _displayToRemove.remove();
    }
    if(animationName === 'slideRight'){
      classes.remove(this, classes.animations.slideRight);
      _displayToRemove.remove();
    }
  }
  function showCitiesView(cityData){
    _citiesView.append();
    _citiesView.update(cityData);
    classes.add(_El.slideContainer, classes.animations.slideLeft);
    _displayToRemove = _activeDisplay;
    _activeDisplay = _citiesView;
  }
  function showSearchView(){
    _displayToRemove = _activeDisplay;
    _activeDisplay = _searchView;
    classes.add(_El.slideContainer, classes.animations.slideRight);
    _searchView.prepend()
  }
  function showWeatherView(currentWeather, forecastWeather){
    _displayToRemove = _activeDisplay;
    _activeDisplay = _weatherView;
    classes.add(_El.slideContainer, classes.animations.slideLeft);
    _weatherView.append();
    _weatherView.update(currentWeather, forecastWeather);
  }
  return {
    showWarning: _searchView.showWarning,
    showCitiesView,
    showWeatherView,
  }
})()

async function getData(url){
  return fetch(url)
    .then(response => new Promise(function(resolve, reject){
      if(response.status === 200){
        resolve(response.json());
      }
      reject(new Error('Bad Response'))
    }))
}
async function getWeatherDataByLatitudeAndLongitude(latitude, longitude){
  const currentWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appID}&units=imperial&lang=en`;
  const forecastWeatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appID}&units=imperial&lang=en`;
  Promise.all([getData(currentWeatherDataURL), getData(forecastWeatherDataURL)])
  .then(weatherData=>{
    const [currentWeatherData, forecastWeatherData] = weatherData;
    console.log(currentWeatherData);
    console.log(forecastWeatherData);
    // Display.showWeatherView(currentWeatherData, forecastWeatherData);
  })
  .catch(handleErrors)
}
async function getWeatherDataByCityName(cityInfo){
  const geoDataURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInfo}&limit=15&appid=${appID}`;
  getData(geoDataURL)
  .then(cityData => new Promise((resolve, reject)=>{
    if(cityData.length > 0){
      resolve(cityData)
    } else {
      reject(new Error('No City Data Received'));
    }
  }))
  .then(cityData => {
    if(cityData.length === 1){
      const {lat: latitude, lon: longitude} = cityData[0];
      getWeatherDataByLatitudeAndLongitude(latitude, longitude)
    } else {
      Display.showCitiesView(cityData);
    }
  })
  .catch(handleErrors)
}
function handleErrors(error){
  const {message} = error;
  console.error(error);
  switch(message){
    case 'Failed to fetch': {
      Display.showWarning('API Server Currently Experiencing Technical Issues');
      break;
    }
    case 'Bad Response': {
      Display.showWarning('API Server Currently Experiencing Technical Issues');
      break;
    }
    case 'No City Data Received': {
      Display.showWarning('No City Data Found for That Query');
      break;
    }
    default: {
      console.error('Error Message: Unspecified Error, Check Call Stack');
      Display.showWarning('API Server Currently Experiencing Technical Issues');
    }
  }
}