<template>
  <div class="table-card">
    <div class="table-header">
      <div class="header-content">
        <div class="content-left">
          <label>Show</label>
          <select class="per-page-selector" v-model="pageIndex">
            <option value="10">10</option>
            <option v-if="entries >= 25" value="25">25</option>
            <option v-if="entries >= 50" value="50">50</option>
            <option v-if="entries >= 100" value="100">100</option>
          </select>
          <label>entries</label>
        </div>
        <div class="content-right">
          <input type="text" placeholder="Search..." class="content-form" />
          <button><span>글쓰기</span></button>
        </div>
      </div>
    </div>
    <div class="table-content">
      <table role="table" aria-busy="false">
        <thead role="rowgroup">
          <tr role="row">
            <th
              role="columnheader"
              scope="col"
              tabindex="0"
              aria-colindex="1"
              aria-sort="descending"
              class="index"
            >
              <div>Index</div>
            </th>

            <th role="columnheader" scope="col" tabindex="0" aria-colindex="2" class="title">
              <div>Title</div>
            </th>

            <th role="columnheader" scope="col" tabindex="0" aria-colindex="3" class="author">
              <div>Author</div>
            </th>

            <th role="columnheader" scope="col" tabindex="0" aria-colindex="4" class="date">
              <div>Date</div>
            </th>

            <th role="columnheader" scope="col" tabindex="0" aria-colindex="5" class="view">
              <div>View</div>
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr role="row" v-for="index in parseInt(pageIndex)" :key="index">
            <td aria-colindex="1" role="cell">{{ index }}</td>
            <td aria-colindex="2" role="cell">
              Title : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum
              soluta quos quibusdam doloremque quas, quam recusandae sapiente nostrum possimus
              quaerat laborum sequi mollitia repellendus enim earum corrupti hic? Nobis?
            </td>
            <td aria-colindex="3" role="cell">
              Author : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum
              soluta quos quibusdam doloremque quas, quam recusandae sapiente nostrum possimus
              quaerat laborum sequi mollitia repellendus enim earum corrupti hic? Nobis?
            </td>
            <td aria-colindex="4" role="cell">2021-02-14</td>
            <td aria-colindex="5" role="cell">99</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div>
        <div class="footer-left">
          <span>Showing 1 to {{ pageIndex }} of {{ entries }} entries</span>
        </div>
        <div class="footer-right">
          <ul role="menubar" aria-label="Pagination">
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item prev-item">
                <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item first-item">
                1
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item">
                2
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item">
                3
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item">
                4
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item last-item">
                5
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" tabindex="-1" class="page-item next-item">
                <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faAngleLeft, faAngleRight);

export default {
  data() {
    return {
      entries: 100,
      pageIndex: 10,
      pageNum: 0,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        margin: 0;
        font-size: 1rem;

        .table-card {
          box-shadow: $shadow2;
          background-color: map-get($map: $theme, $key: "content-bg");
          border-radius: 0.428rem;
          transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;
          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          color: map-get($map: $theme, $key: "font-light");

          .table-header {
            margin: 1.5rem;
            box-sizing: border-box;

            .header-content {
              margin-right: -1rem;
              margin-left: -1rem;
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;

              .content-left {
                margin-bottom: 0;
                display: flex;
                padding-right: 1rem;
                padding-left: 1rem;
                align-items: center;
                justify-content: flex-start;
                width: 50%;
                box-sizing: border-box;

                label {
                  color: map-get($map: $theme, $key: "font-light");
                  font-size: 0.7rem;
                  font-weight: 100;
                  letter-spacing: 1px;
                }

                .per-page-selector {
                  width: 90px;
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  box-sizing: border-box;
                  position: relative;
                  display: inline-block;
                  color: map-get($map: $theme, $key: "font-light");
                  border: 1px solid map-get($map: $theme, $key: "border");
                  padding: 0.5rem;
                  border-radius: 0.358rem;
                  outline: none;
                  background-color: transparent;
                }
              }
              .content-right {
                margin-bottom: 0;
                display: flex;
                padding-right: 1rem;
                padding-left: 1rem;
                align-items: center;
                justify-content: flex-end;
                width: 50%;
                box-sizing: border-box;

                .content-form {
                  margin-right: 1rem;
                  padding: 0.438rem 1rem;
                  background-color: map-get($map: $theme, $key: "content-bg");
                  background-clip: padding-box;
                  border: 1px solid map-get($map: $theme, $key: "border");
                  border-radius: 0.357rem;
                  display: inline-block;
                  width: 100%;
                  line-height: 1.45;
                  color: map-get($map: $theme, $key: "font-light");
                  font-weight: 400;

                  &:focus {
                    transition: all 0.3s ease;
                    border: 1px solid map-get($map: $theme, $key: "color1");
                    border-radius: 0.357rem;
                    outline: none;
                    box-shadow: $shadow;

                    &::placeholder {
                      transition: all 0.3s ease-in-out;
                      padding-left: 5px;
                    }
                  }
                }

                button {
                  cursor: pointer;
                  background-color: map-get($map: $theme, $key: "color1");
                  box-shadow: none;
                  padding: 0.6rem 1.5rem;
                  border-radius: 0.358rem;
                  outline: none;
                  border: none;

                  &:hover {
                    box-shadow: $shadow2;
                  }

                  span {
                    white-space: nowrap;
                    box-sizing: border-box;
                    cursor: pointer;
                    text-align: center;
                    color: $white;
                    font-weight: 500;
                    user-select: none;
                    line-height: 1;
                  }
                }
              }
            }
          }

          .table-content {
            position: relative;
            display: block;
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 1rem;

            table {
              border-bottom-left-radius: 0.357rem;
              border-bottom-right-radius: 0.357rem;
              margin-bottom: 0;
              width: 100%;
              color: map-get($map: $theme, $key: "font-light");
              border-collapse: collapse;
              box-sizing: border-box;
              text-indent: initial;
              border-spacing: 2px;
              border-color: grey;

              thead tr th {
                background-position: right 0.36rem center;
                background-color: map-get($map: $theme, $key: "table");
                padding-right: 1em;
                cursor: pointer;
                border-bottom: 2px solid map-get($map: $theme, $key: "table-border");
                border-top: 1px solid map-get($map: $theme, $key: "table-border");
                outline: none;
                padding: 0.72rem 2rem;
                text-align: left;

                &.index {
                  width: 10%;
                }
                &.title {
                  width: 50%;
                }
                &.author {
                  width: 15%;
                }
                &.date {
                  width: 15%;
                }
                &.view {
                  width: 10%;
                }

                div {
                  cursor: pointer;
                  font-size: 0.857rem;
                  letter-spacing: 0.5px;
                }
              }

              tbody tr td {
                padding: 0.72rem 2rem;
                border-top: 1px solid map-get($map: $theme, $key: "table-border");
                vertical-align: middle;
                box-sizing: border-box;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 0;
                font-weight: 100;
                cursor: pointer;

                &:hover {
                  text-decoration: underline;
                  font-weight: 400;
                }
              }
              tbody tr:hover {
                background-color: transparentize(map-get($map: $theme, $key: "table"), 0.2);
              }
            }
          }

          .table-footer {
            margin: 0 1.5rem 1.5rem 1.5rem;
            box-sizing: border-box;

            div {
              margin: 0;
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;

              div {
                padding: 0 1rem;
                font-size: 0.95rem;
                position: relative;
                box-sizing: border-box;
              }

              .footer-left {
                color: map-get($map: $theme, $key: "text-muted");
                @media (min-width: 576px) {
                  justify-content: flex-start;
                  flex: 0 0 50%;
                  max-width: 50%;
                }
                justify-content: center;
                align-items: center;
                flex: 0 0 100%;
                max-width: 100%;
                font-weight: 100;
                letter-spacing: 1px;
              }

              .footer-right {
                @media (min-width: 576px) {
                  justify-content: flex-end;
                  flex: 0 0 50%;
                  max-width: 50%;
                }
                justify-content: center;
                align-items: center;
                flex: 0 0 100%;
                max-width: 100%;

                ul {
                  border-radius: 0.357rem;
                  display: flex;
                  list-style: none;
                  box-sizing: border-box;
                  align-items: center;

                  .prev-item {
                    margin-right: 0.35rem;
                    border-radius: 50%;
                  }
                  .next-item {
                    margin-left: 0.35rem;
                    border-radius: 50%;
                  }
                  .first-item {
                    border-bottom-left-radius: 50%;
                    border-top-left-radius: 50%;
                  }
                  .last-item {
                    border-bottom-right-radius: 50%;
                    border-top-right-radius: 50%;
                  }

                  .page-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem 0;
                    border: none;
                    transition: all 0.2s ease-out;
                    line-height: 1.3;
                    cursor: pointer;
                    font-size: 1rem;
                    min-width: 2.286rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: map-get($map: $theme, $key: "table");
                    position: relative;
                    color: map-get($map: $theme, $key: "font-light");
                    outline: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
