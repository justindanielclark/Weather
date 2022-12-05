import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';
import CitiesDisplay from './Components/CitiesDisplay';

const appID = 'e6432b3e4048fffaddcfccd1781505f5';

const currentWeather = {
  "coord": {
      "lon": -118.1168,
      "lat": 33.8826
  },
  "weather": [
      {
          "id": 701,
          "main": "Mist",
          "description": "mist",
          "icon": "50n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 58.86,
      "feels_like": 58.86,
      "temp_min": 56.89,
      "temp_max": 61.21,
      "pressure": 1018,
      "humidity": 94
  },
  "visibility": 9656,
  "wind": {
      "speed": 1.01,
      "deg": 280,
      "gust": 1.99
  },
  "clouds": {
      "all": 100
  },
  "dt": 1670224148,
  "sys": {
      "type": 2,
      "id": 2079115,
      "country": "US",
      "sunrise": 1670164938,
      "sunset": 1670201013
  },
  "timezone": -28800,
  "id": 5327422,
  "name": "Bellflower",
  "cod": 200
};
const forecastedWeather = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1670230800,
          "main": {
              "temp": 58.96,
              "feels_like": 58.78,
              "temp_min": 58.96,
              "temp_max": 59.16,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 90,
              "temp_kf": -0.11
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
              "all": 87
          },
          "wind": {
              "speed": 4.45,
              "deg": 268,
              "gust": 5.84
          },
          "visibility": 10000,
          "pop": 0.32,
          "rain": {
              "3h": 0.13
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 09:00:00"
      },
      {
          "dt": 1670241600,
          "main": {
              "temp": 58.23,
              "feels_like": 57.7,
              "temp_min": 57.9,
              "temp_max": 58.23,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 84,
              "temp_kf": 0.18
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
              "all": 82
          },
          "wind": {
              "speed": 4.79,
              "deg": 263,
              "gust": 7.14
          },
          "visibility": 10000,
          "pop": 0.06,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-05 12:00:00"
      },
      {
          "dt": 1670252400,
          "main": {
              "temp": 56.97,
              "feels_like": 56.03,
              "temp_min": 56.97,
              "temp_max": 56.97,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
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
              "all": 96
          },
          "wind": {
              "speed": 3.58,
              "deg": 256,
              "gust": 5.91
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 15:00:00"
      },
      {
          "dt": 1670263200,
          "main": {
              "temp": 59.81,
              "feels_like": 58.32,
              "temp_min": 59.81,
              "temp_max": 59.81,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 60,
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
              "all": 98
          },
          "wind": {
              "speed": 6.2,
              "deg": 248,
              "gust": 6.73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 18:00:00"
      },
      {
          "dt": 1670274000,
          "main": {
              "temp": 61.47,
              "feels_like": 59.61,
              "temp_min": 61.47,
              "temp_max": 61.47,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 49,
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
              "all": 82
          },
          "wind": {
              "speed": 7.29,
              "deg": 224,
              "gust": 6.96
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-05 21:00:00"
      },
      {
          "dt": 1670284800,
          "main": {
              "temp": 60.57,
              "feels_like": 58.62,
              "temp_min": 60.57,
              "temp_max": 60.57,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1012,
              "humidity": 49,
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
              "all": 47
          },
          "wind": {
              "speed": 6.38,
              "deg": 219,
              "gust": 6.04
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 00:00:00"
      },
      {
          "dt": 1670295600,
          "main": {
              "temp": 58.82,
              "feels_like": 57.04,
              "temp_min": 58.82,
              "temp_max": 58.82,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 56,
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
              "all": 15
          },
          "wind": {
              "speed": 2.71,
              "deg": 225,
              "gust": 5.28
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
              "temp": 57.78,
              "feels_like": 56.17,
              "temp_min": 57.78,
              "temp_max": 57.78,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1013,
              "humidity": 62,
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
              "all": 8
          },
          "wind": {
              "speed": 2.33,
              "deg": 125,
              "gust": 5.95
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
              "temp": 56.71,
              "feels_like": 55.18,
              "temp_min": 56.71,
              "temp_max": 56.71,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 66,
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
              "all": 19
          },
          "wind": {
              "speed": 3.56,
              "deg": 97,
              "gust": 8.23
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 09:00:00"
      },
      {
          "dt": 1670328000,
          "main": {
              "temp": 56.97,
              "feels_like": 55.36,
              "temp_min": 56.97,
              "temp_max": 56.97,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 64,
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
              "all": 47
          },
          "wind": {
              "speed": 3.13,
              "deg": 83,
              "gust": 7.58
          },
          "visibility": 10000,
          "pop": 0.07,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-06 12:00:00"
      },
      {
          "dt": 1670338800,
          "main": {
              "temp": 56.71,
              "feels_like": 55.18,
              "temp_min": 56.71,
              "temp_max": 56.71,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1013,
              "humidity": 66,
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
              "speed": 2.04,
              "deg": 89,
              "gust": 8.21
          },
          "visibility": 10000,
          "pop": 0.05,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-06 15:00:00"
      },
      {
          "dt": 1670349600,
          "main": {
              "temp": 59.34,
              "feels_like": 57.88,
              "temp_min": 59.34,
              "temp_max": 59.34,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
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
              "all": 97
          },
          "wind": {
              "speed": 4.03,
              "deg": 181,
              "gust": 7
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
              "temp": 61.41,
              "feels_like": 59.7,
              "temp_min": 61.41,
              "temp_max": 61.41,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 52,
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
              "all": 95
          },
          "wind": {
              "speed": 5.61,
              "deg": 216,
              "gust": 5.59
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
              "temp": 60.53,
              "feels_like": 58.87,
              "temp_min": 60.53,
              "temp_max": 60.53,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 55,
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
              "all": 64
          },
          "wind": {
              "speed": 9.71,
              "deg": 242,
              "gust": 9.13
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 00:00:00"
      },
      {
          "dt": 1670382000,
          "main": {
              "temp": 58.57,
              "feels_like": 56.71,
              "temp_min": 58.57,
              "temp_max": 58.57,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1014,
              "humidity": 55,
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
              "all": 23
          },
          "wind": {
              "speed": 9.55,
              "deg": 264,
              "gust": 11.7
          },
          "visibility": 10000,
          "pop": 0.37,
          "rain": {
              "3h": 0.41
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 03:00:00"
      },
      {
          "dt": 1670392800,
          "main": {
              "temp": 57.18,
              "feels_like": 55.47,
              "temp_min": 57.18,
              "temp_max": 57.18,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 61,
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
              "all": 19
          },
          "wind": {
              "speed": 6.02,
              "deg": 279,
              "gust": 8.55
          },
          "visibility": 10000,
          "pop": 0.58,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 06:00:00"
      },
      {
          "dt": 1670403600,
          "main": {
              "temp": 55.69,
              "feels_like": 54.05,
              "temp_min": 55.69,
              "temp_max": 55.69,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 66,
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
              "all": 6
          },
          "wind": {
              "speed": 2.28,
              "deg": 317,
              "gust": 3.78
          },
          "visibility": 10000,
          "pop": 0.37,
          "rain": {
              "3h": 0.2
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 09:00:00"
      },
      {
          "dt": 1670414400,
          "main": {
              "temp": 54.55,
              "feels_like": 52.95,
              "temp_min": 54.55,
              "temp_max": 54.55,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 69,
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
              "all": 5
          },
          "wind": {
              "speed": 2.19,
              "deg": 77,
              "gust": 4.52
          },
          "visibility": 10000,
          "pop": 0.31,
          "rain": {
              "3h": 0.1
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-07 12:00:00"
      },
      {
          "dt": 1670425200,
          "main": {
              "temp": 53.83,
              "feels_like": 52.25,
              "temp_min": 53.83,
              "temp_max": 53.83,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1019,
              "humidity": 71,
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
              "speed": 3.62,
              "deg": 74,
              "gust": 5.57
          },
          "visibility": 10000,
          "pop": 0.06,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 15:00:00"
      },
      {
          "dt": 1670436000,
          "main": {
              "temp": 57.61,
              "feels_like": 55.94,
              "temp_min": 57.61,
              "temp_max": 57.61,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1021,
              "humidity": 61,
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
              "speed": 4.12,
              "deg": 122,
              "gust": 4.45
          },
          "visibility": 10000,
          "pop": 0.06,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-07 18:00:00"
      },
      {
          "dt": 1670446800,
          "main": {
              "temp": 60.33,
              "feels_like": 58.51,
              "temp_min": 60.33,
              "temp_max": 60.33,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 52,
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
              "speed": 5.37,
              "deg": 200,
              "gust": 4.03
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
              "temp": 60.03,
              "feels_like": 58.17,
              "temp_min": 60.03,
              "temp_max": 60.03,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 52,
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
              "all": 4
          },
          "wind": {
              "speed": 6.51,
              "deg": 225,
              "gust": 4.21
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
              "temp": 57.87,
              "feels_like": 56.23,
              "temp_min": 57.87,
              "temp_max": 57.87,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1022,
              "humidity": 61,
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
              "speed": 4.81,
              "deg": 265,
              "gust": 4.81
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
              "temp": 56.77,
              "feels_like": 55.11,
              "temp_min": 56.77,
              "temp_max": 56.77,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 63,
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
              "all": 14
          },
          "wind": {
              "speed": 2.86,
              "deg": 274,
              "gust": 3.33
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
              "temp": 55.69,
              "feels_like": 53.96,
              "temp_min": 55.69,
              "temp_max": 55.69,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 64,
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
              "speed": 1.03,
              "deg": 264,
              "gust": 1.28
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
              "temp": 54.75,
              "feels_like": 52.88,
              "temp_min": 54.75,
              "temp_max": 54.75,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1022,
              "humidity": 63,
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
              "speed": 2.42,
              "deg": 356,
              "gust": 2.59
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
              "temp": 54.14,
              "feels_like": 52.03,
              "temp_min": 54.14,
              "temp_max": 54.14,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1022,
              "humidity": 59,
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
              "all": 10
          },
          "wind": {
              "speed": 3.2,
              "deg": 357,
              "gust": 3.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-08 15:00:00"
      },
      {
          "dt": 1670522400,
          "main": {
              "temp": 59.05,
              "feels_like": 56.77,
              "temp_min": 59.05,
              "temp_max": 59.05,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 45,
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
              "all": 13
          },
          "wind": {
              "speed": 2.15,
              "deg": 334,
              "gust": 2.89
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
              "temp": 62.91,
              "feels_like": 60.58,
              "temp_min": 62.91,
              "temp_max": 62.91,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1020,
              "humidity": 36,
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
              "all": 75
          },
          "wind": {
              "speed": 5.5,
              "deg": 264,
              "gust": 4.14
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
              "temp": 61.34,
              "feels_like": 59.2,
              "temp_min": 61.34,
              "temp_max": 61.34,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1019,
              "humidity": 43,
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
              "speed": 9.4,
              "deg": 257,
              "gust": 8.61
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
              "temp": 58.6,
              "feels_like": 56.75,
              "temp_min": 58.6,
              "temp_max": 58.6,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 55,
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
              "all": 53
          },
          "wind": {
              "speed": 7.56,
              "deg": 275,
              "gust": 10.27
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-09 03:00:00"
      },
      {
          "dt": 1670565600,
          "main": {
              "temp": 57.15,
              "feels_like": 55.09,
              "temp_min": 57.15,
              "temp_max": 57.15,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 54,
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
              "all": 70
          },
          "wind": {
              "speed": 3.62,
              "deg": 276,
              "gust": 5.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-09 06:00:00"
      },
      {
          "dt": 1670576400,
          "main": {
              "temp": 55.81,
              "feels_like": 53.73,
              "temp_min": 55.81,
              "temp_max": 55.81,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1019,
              "humidity": 56,
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
              "all": 91
          },
          "wind": {
              "speed": 1.45,
              "deg": 298,
              "gust": 3.71
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-09 09:00:00"
      },
      {
          "dt": 1670587200,
          "main": {
              "temp": 54.63,
              "feels_like": 52.47,
              "temp_min": 54.63,
              "temp_max": 54.63,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1018,
              "humidity": 57,
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
              "all": 77
          },
          "wind": {
              "speed": 1.68,
              "deg": 77,
              "gust": 3.42
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-09 12:00:00"
      },
      {
          "dt": 1670598000,
          "main": {
              "temp": 53.78,
              "feels_like": 51.64,
              "temp_min": 53.78,
              "temp_max": 53.78,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1019,
              "humidity": 59,
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
              "all": 52
          },
          "wind": {
              "speed": 2.48,
              "deg": 76,
              "gust": 3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-09 15:00:00"
      },
      {
          "dt": 1670608800,
          "main": {
              "temp": 57.92,
              "feels_like": 55.76,
              "temp_min": 57.92,
              "temp_max": 57.92,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 50,
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
              "all": 34
          },
          "wind": {
              "speed": 2.21,
              "deg": 122,
              "gust": 2.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-09 18:00:00"
      },
      {
          "dt": 1670619600,
          "main": {
              "temp": 61.12,
              "feels_like": 58.91,
              "temp_min": 61.12,
              "temp_max": 61.12,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1017,
              "humidity": 42,
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
              "speed": 2.98,
              "deg": 195,
              "gust": 1.77
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-09 21:00:00"
      },
      {
          "dt": 1670630400,
          "main": {
              "temp": 60.58,
              "feels_like": 58.46,
              "temp_min": 60.58,
              "temp_max": 60.58,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 45,
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
              "speed": 5.5,
              "deg": 212,
              "gust": 3.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-12-10 00:00:00"
      },
      {
          "dt": 1670641200,
          "main": {
              "temp": 58.23,
              "feels_like": 56.25,
              "temp_min": 58.23,
              "temp_max": 58.23,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1017,
              "humidity": 53,
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
              "speed": 2.89,
              "deg": 225,
              "gust": 4.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-10 03:00:00"
      },
      {
          "dt": 1670652000,
          "main": {
              "temp": 56.88,
              "feels_like": 55.04,
              "temp_min": 56.88,
              "temp_max": 56.88,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 59,
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
              "speed": 1.48,
              "deg": 102,
              "gust": 2.98
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-12-10 06:00:00"
      }
  ],
  "city": {
      "id": 5327422,
      "name": "Bellflower",
      "coord": {
          "lat": 33.8826,
          "lon": -118.1168
      },
      "country": "US",
      "population": 76616,
      "timezone": -28800,
      "sunrise": 1670164938,
      "sunset": 1670201013
  }
};

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
    getWeatherDataByLatitudeAndLongitude,
    root: _El.slideContainer, 
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
  _weatherView.update(currentWeather, forecastedWeather);


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
    Display.showWeatherView(currentWeatherData, forecastWeatherData);
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