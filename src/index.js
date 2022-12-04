import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';
import CitiesDisplay from './Components/CitiesDisplay';

const appID = 'e6432b3e4048fffaddcfccd1781505f5';
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
      "temp": 47.5,
      "feels_like": 47.5,
      "temp_min": 43.77,
      "temp_max": 50.05,
      "pressure": 1014,
      "humidity": 95
  },
  "visibility": 10000,
  "wind": {
      "speed": 1.01,
      "deg": 209,
      "gust": 1.99
  },
  "clouds": {
      "all": 75
  },
  "dt": 1670134647,
  "sys": {
      "type": 2,
      "id": 2017837,
      "country": "US",
      "sunrise": 1670080110,
      "sunset": 1670115059
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
          "dt": 1670144400,
          "main": {
              "temp": 47.91,
              "feels_like": 44.04,
              "temp_min": 47.91,
              "temp_max": 48.74,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1013,
              "humidity": 92,
              "temp_kf": -0.46
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
              "speed": 8.46,
              "deg": 160,
              "gust": 12.24
          },
          "visibility": 10000,
          "pop": 0.29,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 09:00:00"
      },
      {
          "dt": 1670155200,
          "main": {
              "temp": 49.57,
              "feels_like": 45.45,
              "temp_min": 49.57,
              "temp_max": 50.61,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 89,
              "temp_kf": -0.58
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
              "all": 62
          },
          "wind": {
              "speed": 10.18,
              "deg": 191,
              "gust": 18.1
          },
          "visibility": 10000,
          "pop": 0.26,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 12:00:00"
      },
      {
          "dt": 1670166000,
          "main": {
              "temp": 50.63,
              "feels_like": 49.57,
              "temp_min": 50.63,
              "temp_max": 50.63,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 89,
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
              "all": 70
          },
          "wind": {
              "speed": 9.22,
              "deg": 176,
              "gust": 15.01
          },
          "visibility": 10000,
          "pop": 0.5,
          "rain": {
              "3h": 0.26
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-04 15:00:00"
      },
      {
          "dt": 1670176800,
          "main": {
              "temp": 53.33,
              "feels_like": 52.12,
              "temp_min": 53.33,
              "temp_max": 53.33,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 80,
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
              "all": 78
          },
          "wind": {
              "speed": 11.01,
              "deg": 179,
              "gust": 16.02
          },
          "visibility": 10000,
          "pop": 0.66,
          "rain": {
              "3h": 1.08
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-04 18:00:00"
      },
      {
          "dt": 1670187600,
          "main": {
              "temp": 55.44,
              "feels_like": 53.92,
              "temp_min": 55.44,
              "temp_max": 55.44,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 69,
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
              "speed": 10.69,
              "deg": 213,
              "gust": 14.94
          },
          "visibility": 10000,
          "pop": 0.95,
          "rain": {
              "3h": 0.78
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-04 21:00:00"
      },
      {
          "dt": 1670198400,
          "main": {
              "temp": 54.82,
              "feels_like": 53.35,
              "temp_min": 54.82,
              "temp_max": 54.82,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 71,
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
              "all": 69
          },
          "wind": {
              "speed": 8.32,
              "deg": 214,
              "gust": 11.9
          },
          "visibility": 10000,
          "pop": 0.88,
          "rain": {
              "3h": 0.12
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 00:00:00"
      },
      {
          "dt": 1670209200,
          "main": {
              "temp": 52.57,
              "feels_like": 51.24,
              "temp_min": 52.57,
              "temp_max": 52.57,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 79,
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
              "all": 20
          },
          "wind": {
              "speed": 7.23,
              "deg": 176,
              "gust": 11.25
          },
          "visibility": 10000,
          "pop": 0.32,
          "rain": {
              "3h": 0.24
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 03:00:00"
      },
      {
          "dt": 1670220000,
          "main": {
              "temp": 51.84,
              "feels_like": 50.58,
              "temp_min": 51.84,
              "temp_max": 51.84,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
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
              "speed": 7.38,
              "deg": 159,
              "gust": 11.81
          },
          "visibility": 10000,
          "pop": 0.29,
          "rain": {
              "3h": 0.3
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 06:00:00"
      },
      {
          "dt": 1670230800,
          "main": {
              "temp": 51.26,
              "feels_like": 49.95,
              "temp_min": 51.26,
              "temp_max": 51.26,
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
              "all": 100
          },
          "wind": {
              "speed": 7.87,
              "deg": 168,
              "gust": 15.17
          },
          "visibility": 10000,
          "pop": 0.41,
          "rain": {
              "3h": 0.16
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 09:00:00"
      },
      {
          "dt": 1670241600,
          "main": {
              "temp": 51.58,
              "feels_like": 50.29,
              "temp_min": 51.58,
              "temp_max": 51.58,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
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
              "speed": 8.66,
              "deg": 165,
              "gust": 15.03
          },
          "visibility": 10000,
          "pop": 0.66,
          "rain": {
              "3h": 0.98
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 12:00:00"
      },
      {
          "dt": 1670252400,
          "main": {
              "temp": 50.88,
              "feels_like": 49.66,
              "temp_min": 50.88,
              "temp_max": 50.88,
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
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.43,
              "deg": 198,
              "gust": 13.6
          },
          "visibility": 10000,
          "pop": 0.79,
          "rain": {
              "3h": 1.11
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 15:00:00"
      },
      {
          "dt": 1670263200,
          "main": {
              "temp": 53.53,
              "feels_like": 52.11,
              "temp_min": 53.53,
              "temp_max": 53.53,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
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
              "all": 55
          },
          "wind": {
              "speed": 8.5,
              "deg": 235,
              "gust": 12.5
          },
          "visibility": 10000,
          "pop": 0.79,
          "rain": {
              "3h": 0.6
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 18:00:00"
      },
      {
          "dt": 1670274000,
          "main": {
              "temp": 54.82,
              "feels_like": 53.26,
              "temp_min": 54.82,
              "temp_max": 54.82,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 69,
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
              "speed": 10.8,
              "deg": 252,
              "gust": 15.05
          },
          "visibility": 10000,
          "pop": 0.19,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 21:00:00"
      },
      {
          "dt": 1670284800,
          "main": {
              "temp": 53.78,
              "feels_like": 52.25,
              "temp_min": 53.78,
              "temp_max": 53.78,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 72,
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
              "all": 3
          },
          "wind": {
              "speed": 10.02,
              "deg": 246,
              "gust": 14.27
          },
          "visibility": 10000,
          "pop": 0.02,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 00:00:00"
      },
      {
          "dt": 1670295600,
          "main": {
              "temp": 51.55,
              "feels_like": 50.07,
              "temp_min": 51.55,
              "temp_max": 51.55,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1013,
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
              "all": 14
          },
          "wind": {
              "speed": 6.26,
              "deg": 265,
              "gust": 10.16
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.18
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 03:00:00"
      },
      {
          "dt": 1670306400,
          "main": {
              "temp": 50.56,
              "feels_like": 49.03,
              "temp_min": 50.56,
              "temp_max": 50.56,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 4,
              "deg": 225,
              "gust": 5.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 06:00:00"
      },
      {
          "dt": 1670317200,
          "main": {
              "temp": 49.89,
              "feels_like": 49.3,
              "temp_min": 49.89,
              "temp_max": 49.89,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 79,
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
              "all": 50
          },
          "wind": {
              "speed": 3.29,
              "deg": 253,
              "gust": 4.52
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 09:00:00"
      },
      {
          "dt": 1670328000,
          "main": {
              "temp": 48.79,
              "feels_like": 48.15,
              "temp_min": 48.79,
              "temp_max": 48.79,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 82,
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
              "all": 75
          },
          "wind": {
              "speed": 3.18,
              "deg": 39,
              "gust": 3.4
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 12:00:00"
      },
      {
          "dt": 1670338800,
          "main": {
              "temp": 47.44,
              "feels_like": 45.16,
              "temp_min": 47.44,
              "temp_max": 47.44,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 86,
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
              "all": 95
          },
          "wind": {
              "speed": 5.08,
              "deg": 39,
              "gust": 5.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 15:00:00"
      },
      {
          "dt": 1670349600,
          "main": {
              "temp": 49.75,
              "feels_like": 47.35,
              "temp_min": 49.75,
              "temp_max": 49.75,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 75,
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
              "all": 57
          },
          "wind": {
              "speed": 6.02,
              "deg": 44,
              "gust": 6.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 18:00:00"
      },
      {
          "dt": 1670360400,
          "main": {
              "temp": 52.21,
              "feels_like": 50.14,
              "temp_min": 52.21,
              "temp_max": 52.21,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 64,
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
              "all": 14
          },
          "wind": {
              "speed": 5.21,
              "deg": 14,
              "gust": 5.53
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 21:00:00"
      },
      {
          "dt": 1670371200,
          "main": {
              "temp": 51.85,
              "feels_like": 49.8,
              "temp_min": 51.85,
              "temp_max": 51.85,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 65,
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
              "all": 25
          },
          "wind": {
              "speed": 5.32,
              "deg": 317,
              "gust": 6.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 00:00:00"
      },
      {
          "dt": 1670382000,
          "main": {
              "temp": 50.18,
              "feels_like": 48.33,
              "temp_min": 50.18,
              "temp_max": 50.18,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 73,
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
              "all": 42
          },
          "wind": {
              "speed": 6.6,
              "deg": 301,
              "gust": 7.52
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
              "temp": 48.79,
              "feels_like": 46.65,
              "temp_min": 48.79,
              "temp_max": 48.79,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 24
          },
          "wind": {
              "speed": 5.26,
              "deg": 309,
              "gust": 6.26
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
              "temp": 47.71,
              "feels_like": 46.87,
              "temp_min": 47.71,
              "temp_max": 47.71,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1018,
              "humidity": 78,
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
              "speed": 3.24,
              "deg": 357,
              "gust": 3.58
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
              "temp": 47.16,
              "feels_like": 47.16,
              "temp_min": 47.16,
              "temp_max": 47.16,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1018,
              "humidity": 78,
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
              "all": 3
          },
          "wind": {
              "speed": 2.82,
              "deg": 88,
              "gust": 2.93
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
              "temp": 46.4,
              "feels_like": 45.07,
              "temp_min": 46.4,
              "temp_max": 46.4,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 79,
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
              "all": 1
          },
          "wind": {
              "speed": 3.58,
              "deg": 87,
              "gust": 3.76
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
              "temp": 49.3,
              "feels_like": 48.15,
              "temp_min": 49.3,
              "temp_max": 49.3,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
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
              "speed": 3.89,
              "deg": 75,
              "gust": 4.12
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
              "temp": 52.2,
              "feels_like": 49.8,
              "temp_min": 52.2,
              "temp_max": 52.2,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1022,
              "humidity": 57,
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
              "speed": 1.32,
              "deg": 63,
              "gust": 2.46
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
              "temp": 52.2,
              "feels_like": 49.84,
              "temp_min": 52.2,
              "temp_max": 52.2,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 58,
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
              "speed": 3.78,
              "deg": 314,
              "gust": 3.69
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
              "temp": 50.13,
              "feels_like": 47.89,
              "temp_min": 50.13,
              "temp_max": 50.13,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1024,
              "humidity": 65,
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
              "speed": 3.06,
              "deg": 325,
              "gust": 3.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-08 03:00:00"
      },
      {
          "dt": 1670479200,
          "main": {
              "temp": 48.88,
              "feels_like": 48.88,
              "temp_min": 48.88,
              "temp_max": 48.88,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1024,
              "humidity": 67,
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
              "all": 1
          },
          "wind": {
              "speed": 1.03,
              "deg": 5,
              "gust": 1.48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-08 06:00:00"
      },
      {
          "dt": 1670490000,
          "main": {
              "temp": 47.7,
              "feels_like": 46.76,
              "temp_min": 47.7,
              "temp_max": 47.7,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1024,
              "humidity": 70,
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
              "all": 2
          },
          "wind": {
              "speed": 3.33,
              "deg": 44,
              "gust": 3.49
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-08 09:00:00"
      },
      {
          "dt": 1670500800,
          "main": {
              "temp": 46.76,
              "feels_like": 46.76,
              "temp_min": 46.76,
              "temp_max": 46.76,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1024,
              "humidity": 69,
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
              "all": 3
          },
          "wind": {
              "speed": 2.84,
              "deg": 84,
              "gust": 3.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-08 12:00:00"
      },
      {
          "dt": 1670511600,
          "main": {
              "temp": 46,
              "feels_like": 44.69,
              "temp_min": 46,
              "temp_max": 46,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1024,
              "humidity": 70,
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
              "all": 34
          },
          "wind": {
              "speed": 3.49,
              "deg": 99,
              "gust": 3.65
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-08 15:00:00"
      },
      {
          "dt": 1670522400,
          "main": {
              "temp": 48.58,
              "feels_like": 46.45,
              "temp_min": 48.58,
              "temp_max": 48.58,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1023,
              "humidity": 64,
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
              "all": 67
          },
          "wind": {
              "speed": 5.17,
              "deg": 145,
              "gust": 6.35
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-08 18:00:00"
      },
      {
          "dt": 1670533200,
          "main": {
              "temp": 51.3,
              "feels_like": 49.05,
              "temp_min": 51.3,
              "temp_max": 51.3,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 62,
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
              "speed": 5.84,
              "deg": 200,
              "gust": 8.3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-08 21:00:00"
      },
      {
          "dt": 1670544000,
          "main": {
              "temp": 50.83,
              "feels_like": 48.67,
              "temp_min": 50.83,
              "temp_max": 50.83,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1018,
              "humidity": 65,
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
              "speed": 7.7,
              "deg": 184,
              "gust": 11.9
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-09 00:00:00"
      },
      {
          "dt": 1670554800,
          "main": {
              "temp": 50.99,
              "feels_like": 48.94,
              "temp_min": 50.99,
              "temp_max": 50.99,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 67,
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
              "speed": 13.47,
              "deg": 171,
              "gust": 22.86
          },
          "visibility": 10000,
          "pop": 0.23,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-09 03:00:00"
      },
      {
          "dt": 1670565600,
          "main": {
              "temp": 49.89,
              "feels_like": 43.74,
              "temp_min": 49.89,
              "temp_max": 49.89,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 18.52,
              "deg": 167,
              "gust": 28.07
          },
          "visibility": 7142,
          "pop": 0.82,
          "rain": {
              "3h": 3.28
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-09 06:00:00"
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
      "sunrise": 1670080110,
      "sunset": 1670115059
  }
}
console.log('currentWeatherData')
console.log(currentWeatherData)
console.log('forecastedWeatherData')
console.log(forecastedWeatherData)

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
    showSearchView
  })
  _init();
  // _searchView.append()
  // _activeDisplay = _searchView;
  _activeDisplay = _weatherView;
  _weatherView.append();
  _weatherView.update(currentWeatherData, forecastedWeatherData)

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